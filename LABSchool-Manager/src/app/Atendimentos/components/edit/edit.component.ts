import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { Atendimento } from '../../model/atendimento.moel';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  atendimento: any = [];
  alunos: any[] = [];
  pedagogos: any[] = [];
  formInvalid: boolean = false;

  constructor(
    private atendimentoService: AtendimentoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const atendimentoId = +this.route.snapshot.params['id'];
    this.getAtendimento(atendimentoId);
    this.getAlunos();
    this.getPedagogos();
  }

  getAtendimento(id: number): void {
    this.atendimentoService.getAtendimento(id).subscribe(
      (atendimento: Atendimento) => {
        if (atendimento) {
          this.atendimento = atendimento;
        } else {
          console.error('Atendimento não encontrado.');
        }
      },
      (error: any) => {
        console.error('Erro ao obter o atendimento', error);
      }
    );
  }

  getAlunos(): void {
    this.atendimentoService.getAlunos().subscribe(
      (alunos: any[]) => {
        this.alunos = alunos;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de alunos', error);
      }
    );
  }

  getPedagogos(): void {
    this.atendimentoService.getPedagogos().subscribe(
      (pedagogos: any[]) => {
        this.pedagogos = pedagogos;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de pedagogos', error);
      }
    );
  }

  salvarAtendimento(): void {
    if (!this.atendimento.descricao || !this.atendimento.alunoId || !this.atendimento.pedagogoId) {
      this.formInvalid = true;
      return;
    }
  
    this.atendimentoService.updateAtendimento(this.atendimento.id, this.atendimento).subscribe(
      () => {
        console.log('Atendimento atualizado com sucesso.');
        alert('Acompanhamento atualizado com sucesso.');
        this.router.navigate(['/atendimentos/list']);
      },
      (error: any) => {
        console.error('Erro ao atualizar o acompanhamento', error);
      }
    );
  }  

  deletarAtendimento(): void {
    if (confirm('Tem certeza que deseja excluir este atendimento?')) {
      this.atendimentoService.deleteAtendimento(this.atendimento.id).subscribe(
        () => {
          console.log('Atendimento excluído com sucesso.');
          alert('Atendimento excluído com sucesso.');
          this.router.navigate(['/atendimentos/list']);
        },
        (error: any) => {
          console.error('Erro ao excluir o atendimento', error);
        }
      );
    }
  }
}
