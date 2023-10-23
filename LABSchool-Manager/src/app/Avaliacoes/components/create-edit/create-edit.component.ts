import { Component, OnInit } from '@angular/core';
import { Avaliacao } from '../../model/avaliacoes.model';
import { AvaliacoesService } from '../../../services/avaliacaoes.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  selectedAlunoId: number = 0;
  avaliacao: Avaliacao = {
    id: 0,
    titulo: '',
    descricao: '',
    materia: '',
    pontuacaoMaxima: 0,
    nota: 0,
    dataRealizacao: new Date(),
    codigoProfessor: 0,
    alunoId: 0,
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
    this.avaliacao.alunoId = this.selectedAlunoId;
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
      console.error('Formulário de avaliação inválido.');
    }
  }

  validateForm(avaliacao: Avaliacao): boolean {
    return true; 
  }
}

