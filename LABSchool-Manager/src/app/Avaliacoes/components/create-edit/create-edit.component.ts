import { Component, OnInit } from '@angular/core';
import { Avaliacao } from '../../model/avaliacoes.model';
import { AvaliacoesService } from '../../../services/avaliacaoes.service';

@Component({
  selector: 'app-create-edit-avaliacao',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  avaliacao: Avaliacao = {
    id: 0,
    titulo: '',
    descricao: '',
    materia: '',
    pontuacaoMaxima: 0,
    nota: 0,
    dataRealizacao: new Date(),
    codigoProfessor: 0
  };

  alunos: any[] = [];
  avaliacoes: Avaliacao[] = [];

  constructor(private avaliacoesService: AvaliacoesService) { }

  ngOnInit(): void {
    this.loadAlunos();
    this.loadAvaliacoes();
  }

  loadAlunos(): void {
    this.avaliacoesService.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
    });
  }

  loadAvaliacoes(): void {
    this.avaliacoesService.getAvaliacoes().subscribe(
      (avaliacoes: Avaliacao[]) => {
        this.avaliacoes = avaliacoes;
      },
      error => {
        console.error('Erro ao carregar avaliações.', error);
       
      }
    );
  }

  onSave(): void {
    if (this.validateForm(this.avaliacao)) {
      this.avaliacoesService.createAvaliacao(this.avaliacao).subscribe(
        response => {
          console.log('Avaliação salva com sucesso!', response);
          this.avaliacao = response;
          this.loadAvaliacoes();
        },
        error => {
          console.error('Erro ao salvar a avaliação.', error);
        }
      );
    } else {
      console.error('Formulário de avaliação inválido.');    }
  }

  validateForm(avaliacao: Avaliacao): boolean {
    return true;
  }
}

