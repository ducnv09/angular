import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  // userInfo = {
  //   userName: 'tiepphan',
  //   password: '',
  //   rememberMe: true,
  // };

  userInfo = {
    userName: '',
    password: '',
    rememberMe: false,
  };

  onSubmit(form: NgForm) {
    console.log(form);
    throw new Error('something went wrong');
  }

  usernamePattern = /^[a-z]{6,32}$/i;

  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  
}
