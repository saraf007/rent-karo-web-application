// Angular
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginModeSignup = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchModeToLogin() {
    this.isLoginModeSignup = false;
  }

  switchModeToSignup() {
    this.isLoginModeSignup = true;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

}
