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
          console.log('Resposta recebida do servidor:', response); // Log 2

          if (response && response.token) {
            const user = {
              username: response.username, 
              token: response.token
            };
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return true;
          }
          return false;
        }),
        catchError((error) => { // Captura o erro
          console.error('Erro ao tentar fazer login:', error); // Log 3
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
}
