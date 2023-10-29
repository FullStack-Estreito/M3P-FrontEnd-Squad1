import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:5203/api/usuario';
  private currentUserSubject: BehaviorSubject<any | null>;
  public currentUser: Observable<any | null>;

  constructor(private http: HttpClient) {
    const currentUserString = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any | null>(currentUserString ? JSON.parse(currentUserString) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.API_URL}/login`, { Email: username, password })
      .pipe(
        map(response => {
          if (response && response.token) {
            const user = {
              nome: response.nome, // Alterado para 'nome'
              token: response.token
            };
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return true;
          }
          return false;
        }),
        catchError((error) => {
          console.error('Erro ao tentar fazer login:', error);
          return throwError('Credenciais inválidas. Por favor, tente novamente.');
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  resetPassword(email: string, currentPassword: string, newPassword: string): Observable<any> {
    const requestBody = {
        email,
        currentPassword,
        newPassword
    };

    return this.http.put<string>(`${this.API_URL}/changepassword`, requestBody, { responseType: 'text' as 'json' })
      .pipe(
        catchError((error) => {
          console.error('Erro ao tentar redefinir senha:', error);
          return throwError('Não foi possível redefinir a senha. Por favor, tente novamente.');
        })
      );
}


}
