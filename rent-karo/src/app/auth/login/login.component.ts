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
  isLoading = false;
  error: string = null;

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
    this.isLoading = true;
    this.authService.signup(email, password).subscribe(
      resData => {
        this.isLoading = false;
      },
     errorMessage => {
       this.error = errorMessage;
       this.isLoading = false;
     }
   );
    form.reset();
  }

}
