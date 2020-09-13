import { AuthService } from 'src/app/core/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  email = 'nguyenbangocthao86@gmail.com'
  password = '123456789'
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.signIn(this.email, this.password).subscribe(
      (data: any) => {
        console.log(data);

      }
    )

  }
}
