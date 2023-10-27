import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { Atendimento } from '../../model/atendimento.moel';
import { map } from 'rxjs';


// interface Atendimento {
//   dataHora: string;
//   descricao: string;
//   StatusAtivo: boolean;
// }


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  atendimentos: Atendimento[] = [];
  paginatedAtendimentos: Atendimento[] = [];
  filtroDescricao: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 9; // Quantidade de items por página que deseja
  totalItems: number = 0;
  totalPages: number[] = [];
  loadingError: boolean = false; // Nova propriedade
  searchError: boolean = false; // Nova propriedade

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.obterAtendimentos();
  }

  obterAtendimentos() {
    this.atendimentoService.getAtendimentos().pipe(
      map((atendimentos: Atendimento[]) => {
        if (this.filtroDescricao.trim() === '') {
          this.searchError = false; // Resetar a mensagem de erro se o filtro estiver vazio
          return atendimentos;
        } else {
          let filtered = atendimentos.filter(acompanhamento =>
            acompanhamento.descricao.toLowerCase().includes(this.filtroDescricao.trim().toLowerCase())
          );
          this.searchError = filtered.length === 0; // Setar a mensagem de erro se nenhum acompanhamento foi encontrado
          return filtered;
        }
      })
    ).subscribe((atendimentos: Atendimento[]) => {
      this.atendimentos = atendimentos;
      this.totalItems = this.atendimentos.length;
      this.setTotalPages();
      this.paginateAtendimentos();
    }, err => {
      this.loadingError = true;
    });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  setTotalPages(): void {
    let numPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.totalPages = Array.from({length: numPages}, (_, i) => i + 1);
  }

  paginateAtendimentos(): void {
    let startItem = (this.currentPage - 1) * this.itemsPerPage;
    let endItem = this.currentPage * this.itemsPerPage;
    this.paginatedAtendimentos = this.atendimentos.slice(startItem, endItem);
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.paginateAtendimentos();
  }

  filtrarAtendimentos() {
    this.currentPage = 1; // Volta para a primeira página ao aplicar o filtro
    this.obterAtendimentos();
  }
}

