import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Atendimento, TipoUsuario } from '../Atendimentos/model/atendimento.moel';
import { User } from '../usuarios/Model/user.model';
import { Avaliacao } from '../Avaliacoes/model/avaliacoes.model';
import { Exercicio } from '../exercicios/model/exercicios.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:5203/api';

  constructor(private http: HttpClient) { }

  getTotalAlunos(): Observable<number> {
    return this.http.get<User[]>(`${this.apiUrl}/usuario`).pipe(
      map(users => users.filter(user => user.tipoUsuario === TipoUsuario.Aluno).length)
    );
  }

  getTotalExercicios(): Observable<number> {
    return this.http.get<Exercicio[]>(`${this.apiUrl}/exercicio`).pipe(
      map(exercicios => exercicios.length)
    );
  }

  getTotalAvaliacoes(): Observable<number> {
    return this.http.get<Avaliacao[]>(`${this.apiUrl}/avaliacao`).pipe(
      map(avaliacoes => avaliacoes.length)
    );
  }

  // Supondo que atendimentos tenham uma estrutura similar
  getTotalAtendimentos(): Observable<number> {
    return this.http.get<any[]>(`${this.apiUrl}/atendimentos`).pipe(
      map(atendimentos => atendimentos.length)
    );
  }

  getAlunos(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/usuario`).pipe(
      map(users => users.filter(user => user.tipoUsuario === TipoUsuario.Aluno))
    );
  }
}
