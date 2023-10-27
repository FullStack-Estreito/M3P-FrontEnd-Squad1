import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { Atendimento } from '../../model/atendimento.moel'; // Notei que havia um erro de digitação no nome do arquivo ".moel"
import { forkJoin, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  atendimento: Atendimento = {
    id: undefined,
    dataHora: '',
    descricao: '',
    statusAtivo: false,
    alunoId: 0,
    pedagogoId: 0
  };
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
    forkJoin([
        this.atendimentoService.getAlunos(),
        this.atendimentoService.getPedagogos()
    ]).subscribe(() => {
        this.getAtendimento(atendimentoId);
    });
  }

  getAtendimento(id: number): void {
    this.atendimentoService.getAtendimento(id).pipe(catchError(this.handleError)).subscribe(
        (response: any) => {
            if (response && response.atendimento) {
                const atendimento = response.atendimento;
                atendimento.dataHora = this.convertToDateInputFormat(atendimento.dataHora);
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

  convertToDateInputFormat(dateStr: string): string {
    if (dateStr.includes('-')) { // Se a data já estiver no formato YYYY-MM-DD
        return dateStr;
    }
    const parts = dateStr.split('/');
    return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
}


  getAlunos(): void {
    this.atendimentoService.getAlunos().pipe(catchError(this.handleError)).subscribe(
      (alunos: any[]) => {
        this.alunos = alunos;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de alunos', error);
      }
    );
  }

  getPedagogos(): void {
    this.atendimentoService.getPedagogos().pipe(catchError(this.handleError)).subscribe(
      (pedagogos: any[]) => {
        this.pedagogos = pedagogos;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de pedagogos', error);
      }
    );
  }
  salvarAtendimento(): void {
    if (!this.atendimento.descricao || !this.atendimento.alunoId || !this.atendimento.pedagogoId || this.atendimento.id === undefined) {
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
      if (this.atendimento.id !== undefined) { // Verifique se atendimento.id não é undefined
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
      } else {
        console.error('ID do atendimento é undefined.');
      }
    }
  }
  handleError(error: any) {
    console.error('Erro na requisição:', error);
    return throwError(error);
  }
}