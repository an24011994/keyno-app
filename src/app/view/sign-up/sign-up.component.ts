import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = 'nguyenbangocthao86@gmail.com';
  password = '123456789';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.signIn(this.email, this.password).subscribe(
      (data: any) => {
        console.log(data);

      }
    );
  }

}
