// Angular
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// Project
import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isLoginModeSignup = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    this.createUser(form.value);
    form.reset();
  }

  createUser(user: User) {
    this.authService.createUser(user).subscribe(data => {
      console.log(data);
    });
    this.isLoading = false;
  }

}
