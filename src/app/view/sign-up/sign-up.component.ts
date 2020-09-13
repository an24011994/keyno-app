import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 

  constructor(private authService: AuthService) { }
  valueEmaill = 'nguyenbangocthao86@gmail.com';
  valuePassword = '123456789';
  valueName = 'thao12347646';
  
  ngOnInit(): void {
    this.authService.signUp(this.valueName, this.valueEmaill, this.valuePassword).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }


}
