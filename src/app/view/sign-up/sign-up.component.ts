import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
<<<<<<< HEAD
  valueEmaill;
  valuePassword;
  valueName;
  constructor(private authService: AuthService) {
  }

=======
 

  constructor(private authService: AuthService) { }
  valueEmaill = 'nguyenbangocthao86@gmail.com';
  valuePassword = '123456789';
  valueName = 'thao12347646';
  
>>>>>>> an-94
  ngOnInit(): void {

  }
  click() {
    this.authService.signUp(this.valueEmaill, this.valuePassword, this.valueName).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }
}
