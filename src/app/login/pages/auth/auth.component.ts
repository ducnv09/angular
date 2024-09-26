import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { AuthService } from '../../services/auth-service.service';
import { Subject, takeUntil, merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {

  // mở form đăng kí
  isLogin = true;

  registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  // tín hiệu cho thông báo lỗi
  fullnameErrorMessageRegister = signal('');
  emailErrorMessageRegister = signal('');
  passwordErrorMessageRegister = signal('');

  emailErrorMessageLogin = signal('');
  passwordErrorMessageLogin = signal('');

  constructor(
    private authService: AuthService
  ) {
    // Lắng nghe thay đổi của các thuộc tính trong form
    merge(
      // register form
      this.registerForm.controls['fullname'].statusChanges,
      this.registerForm.controls['fullname'].valueChanges,
      this.registerForm.controls['email'].statusChanges,
      this.registerForm.controls['email'].valueChanges,
      this.registerForm.controls['password'].statusChanges,
      this.registerForm.controls['password'].valueChanges,

      //login form
      this.loginForm.controls['email'].statusChanges,
      this.loginForm.controls['email'].valueChanges,
      this.loginForm.controls['password'].statusChanges,
      this.loginForm.controls['password'].valueChanges,
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

    // Lắng nghe thay đổi email
  }

  updateErrorMessage() {
    // register
    const fullnameControlRegister = this.registerForm.controls['fullname'];
    const emailControlRegister = this.registerForm.controls['email'];
    const passwordControlRegister = this.registerForm.controls['password'];

    // login
    const emailControlLogin = this.loginForm.controls['email'];
    const passwordControlLogin = this.loginForm.controls['password'];

    // register

    //cập nhật thông báo lỗi cho fullnaem
    if (fullnameControlRegister.hasError('required')) {
      this.fullnameErrorMessageRegister.set('You must enter your full name');
    } else {
      this.fullnameErrorMessageRegister.set('');
    }

    //cập nhật thông báo lỗi cho email
    if (emailControlRegister.hasError('required')) {
      this.emailErrorMessageRegister.set('You must enter an email');
    } else if (emailControlRegister.hasError('email')) {
      this.emailErrorMessageRegister.set('Not a valid email');
    } else {
      this.emailErrorMessageRegister.set('');
    }

    //cập nhật thông báo lỗi cho password
    if (passwordControlRegister.hasError('required')) {
      this.passwordErrorMessageRegister.set('You must enter a password');
    } else if (passwordControlRegister.hasError('minlength')) {
      this.passwordErrorMessageRegister.set('Password must be at least 3 characters');
    } else {
      this.passwordErrorMessageRegister.set('');
    }

    // login
    //cập nhật thông báo lỗi cho email
    if (emailControlLogin.hasError('required')) {
      this.emailErrorMessageLogin.set('You must enter an email');
    } else if (emailControlLogin.hasError('email')) {
      this.emailErrorMessageLogin.set('Not a valid email');
    } else {
      this.emailErrorMessageLogin.set('');
    }

    //cập nhật thông báo lỗi cho password
    if (passwordControlLogin.hasError('required')) {
      this.passwordErrorMessageLogin.set('You must enter a password');
    } else {
      this.passwordErrorMessageLogin.set('');
    }
  }

  // đăng kí
  handleRegister() {
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        localStorage.setItem("jwt", response.jwt);
        this.authService.getUserProfile().subscribe();
      }
    });
  }

  // đăng nhập
  handleLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem("jwt", response.jwt);
        this.authService.getUserProfile().subscribe();
      }
    });
  }

  // tắt bật form register
  togglePanel() {
    this.isLogin = !this.isLogin;

    // // hủy thông báo lỗi của form
    // this.fullnameErrorMessageRegister.set('');
    // this.emailErrorMessageRegister.set('');
    // this.passwordErrorMessageRegister.set('');

    // this.emailErrorMessageLogin.set();
    // this.p

    // xóa giá trị của form
    this.registerForm.reset();
    this.loginForm.reset();
  }

}
