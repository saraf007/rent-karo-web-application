// Angular
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Project
import { User } from '../user.model';
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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(user: User) {
    this.authService.createUser(user).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (!this.isLoginModeSignup) {
     //authObs = this.authService.login(email, password);
    } else {
    //authObs = this.authService.signup(email, password);
    }
    form.reset();
}

}
