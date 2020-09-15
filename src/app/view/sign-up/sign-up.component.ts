import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  valueEmaill;
  valuePassword;
  valueName;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  click() {
    this.authService
      .signUp(this.valueEmaill, this.valuePassword, this.valueName)
      .subscribe((data: any) => {
        console.log(data);
      this.router.navigate([''])
      });
  }
}
