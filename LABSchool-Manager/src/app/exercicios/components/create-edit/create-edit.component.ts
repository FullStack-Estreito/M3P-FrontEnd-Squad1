import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../../model/exercicios.model';
import { ExerciciosService } from '../../../services/exercicios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent {
  selectedAlunoId: number = 0;
  exercicio: Exercicio = {
    id: 0,
    titulo: '',
    descricao: '',
    materia: '',
    dataConclusao: new Date(),
    codigoProfessor: 0,
    alunoId: 0,
  };

  alunos: any[] = [];
  exercicios: Exercicio[] = [];

  constructor(private exerciciosService: ExerciciosService) { }

  ngOnInit(): void {
    this.loadAlunos();
    this.loadExercicios();
  }

  loadAlunos(): void {
    this.exerciciosService.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
    });
  }

  loadExercicios(): void {
    this.exerciciosService.getExercicios().subscribe(
      (exercicios: Exercicio[]) => {
        this.exercicios = exercicios;
      },
      error => {
        console.error('Erro ao carregar exercícios.', error);
      }
    );
  }

  onSave(): void {
    this.exercicio.alunoId = this.selectedAlunoId;
    if (this.validateForm(this.exercicio)) {
      this.exerciciosService.createExercicio(this.exercicio).subscribe(
        response => {
          console.log('Exercício salvo com sucesso!', response);
          this.exercicio = response;
          this.loadExercicios();
        },
        error => {
          console.error('Erro ao salvar o exercício.', error);
        }
      );
    } else {
      console.error('Formulário de exercício inválido.');
    }
  }

  validateForm(exercicio: Exercicio): boolean {
    return true; 
  }
}