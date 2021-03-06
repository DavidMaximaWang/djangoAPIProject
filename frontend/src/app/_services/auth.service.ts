import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:8000/api/auth/';

  jwtHelper = new JwtHelperService();
  username: any;

  constructor(private http: HttpClient) {}
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        this.username = user.username;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
