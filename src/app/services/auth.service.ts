import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { House } from '../model/user.data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private user!: House;
  constructor(private http: HttpClient, private router: Router) {}

  private apiUrl = 'http://localhost:8089/api/houseCollection/login';

  login(houseName: string, cardId: string) {
    return this.http.post(this.apiUrl, { houseName, cardId }).subscribe(
      (response: any) => {
        console.log(response);

        const token = response.token;
        if (token) {
          localStorage.setItem('authToken', token);
          localStorage.setItem('user', JSON.stringify(response.house));
          this.isAuthenticated = true;
          this.router.navigate(['/home']);
          this.user = response.house;
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.isAuthenticated = false;
      }
    );
  }
  getUser(): House {
    return this.user ?? JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.clear();
    sessionStorage.clear();
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    this.isAuthenticated = !!token;
    return this.isAuthenticated;
  }
}
