import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atendimento, TipoUsuario } from '../Atendimentos/model/atendimento.moel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private apiUrl = 'http://localhost:5203/api';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario`).pipe(
      map(users => {
        const alunos = users.filter(user => user.tipoUsuario === TipoUsuario.Aluno);
        console.log("Alunos filtrados: ", alunos);
        return alunos;
      })
    );
  }
  
  getPedagogos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario`).pipe(
      map(users => {
        const pedagogos = users.filter(user => user.tipoUsuario === TipoUsuario.Pedagogo);
        console.log("Pedagogos filtrados: ", pedagogos);
        return pedagogos;
      })
    );
  }
  

  // Create
  createAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(`${this.apiUrl}/atendimentos`, atendimento);
  }

  // Read
  getAtendimento(id: number): Observable<Atendimento> {
    return this.http.get<Atendimento>(`${this.apiUrl}/atendimentos/${id}`);
  }

  getAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.apiUrl}/atendimentos`);
  }

  // Update
  updateAtendimento(id: number, atendimento: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(`${this.apiUrl}/atendimentos/${id}`, atendimento);
  }

  // Delete
  deleteAtendimento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/atendimentos/${id}`);
  }
}
