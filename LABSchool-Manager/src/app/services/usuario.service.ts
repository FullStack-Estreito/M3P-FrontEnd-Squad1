import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../usuarios/Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:5203/api/usuario';  // Substitua pela URL da sua API
  
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  updateUser(userId: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${userId}`, user);
  }

  
}


