import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(email, password) {
    return this.http.post('https://conduit.productionready.io/api/users/login', {
      "user": {
        "email": email,
        "password": password
      }
    });
  }
  signUp(name, mail, password) {
    return this.http.post('https://conduit.productionready.io/api/users', {
      "user": {
        "username": name,
        "email": mail,
        "password": password,
      }
    });
  }
}
