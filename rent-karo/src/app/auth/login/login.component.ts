// Angular
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// Project
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginModeSignup = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  switchModeToLogin() {
    this.isLoginModeSignup = false;
  }

  switchModeToSignup() {
    this.isLoginModeSignup = true;
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.authService.signup(email, password).subscribe(
      resData => {
        console.log(resData);
      },
     error => {
       console.log(error);
     }
   );

    form.reset();
  }

}
