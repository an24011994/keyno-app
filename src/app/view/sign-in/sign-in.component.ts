import { AuthService } from 'src/app/core/service/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  
  email;
  password;
  list;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  loginSucess() {
    this.authService
      .signIn(this.email, this.password)
      .subscribe((data: any) => {
        this.list = data;
        console.log(this.list);
        
        this.router.navigate(['list']);
      });
  }
  resGister() {
    this.router.navigate(['signup']);
  }
 
}
