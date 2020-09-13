import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '10kick3@aoe.com';
  password = '12345678';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.signIn(this.email, this.password).subscribe(
      (data: any) => {
        console.log(data);

      }
    );
  }

}
