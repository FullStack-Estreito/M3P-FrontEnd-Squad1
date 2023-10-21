import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../usuarios/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:5203/api/usuario';  // Substitua pela URL da sua API
  
  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(this.baseUrl, { userDto: user });
}

  updateUser(id: string, user: User) {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  // Adicione outros métodos conforme a necessidade
}

