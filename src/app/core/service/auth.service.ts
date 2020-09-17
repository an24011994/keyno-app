import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private http: HttpClient) { }
ngOnInit(){
  
}
  signIn(email, password) {
    return this.http.post('https://conduit.productionready.io/api/users/login', {
      "user": {
        "email": email,
        "password": password
      }
    });
  }
  signUp(mail, password, name) {
    console.log({
      "user": {
        "username": name,
        "email": mail,
        "password": password,
      }
    });

    return this.http.post('https://conduit.productionready.io/api/users', {
      "user": {
        "username": name,
        "email": mail,
        "password": password,
      }
    });
  }
 
  
}
