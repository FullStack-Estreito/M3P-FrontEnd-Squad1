import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avaliacao, TipoUsuario } from '../Avaliacoes/model/avaliacoes.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesService {

  private apiUrl: string = "http://localhost:5203/api";

  constructor(private http: HttpClient) { }

  // Método para obter alunos
  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario`).pipe(
      map(users => {
        const alunos = users.filter(user => user.tipoUsuario === TipoUsuario.Aluno);
        console.log("Alunos filtrados: ", alunos);
        return alunos;
      })
    );
  }

  // Create
  createAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.http.post<Avaliacao>(`${this.apiUrl}/avaliacoes`, avaliacao);
  }

  // Read
  getAvaliacao(id: number): Observable<Avaliacao> {
    return this.http.get<Avaliacao>(`${this.apiUrl}/avaliacoes/${id}`);
  }

  getAvaliacoes(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(`${this.apiUrl}/avaliacoes`);
  }

  // Update
  updateAvaliacao(id: number, avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.http.put<Avaliacao>(`${this.apiUrl}/avaliacoes/${id}`, avaliacao);
  }

  // Delete
  deleteAvaliacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/avaliacoes/${id}`);
  }
}
