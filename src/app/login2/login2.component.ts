import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { AuthService } from './service/auth-service.service';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login2',
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
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component {
  //gốc

  // // Tạo biến để theo dõi trạng thái toggle
  // isActive: boolean = false;

  // // Phương thức để toggle class
  // toggleActive(): void {
  //   this.isActive = !this.isActive;
  // }

  // custom
  isRegister: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  //tín hiệu cho thông báo lỗi
  usernameErrorMessageRegister = signal('');
  emailErrorMessageRegister = signal('');
  passwordErrorMessageRegister = signal('');

  usernameErrorMessageLogin = signal('');
  passwordErrorMessageLogin = signal('');

  constructor(
    private authService: AuthService
  ) {
    //lắng nghe thay đổi của các thuộc tính trong form
    // merge(
    //   this.loginForm.controls['username'].statusChanges,
    //   this.loginForm.controls['username'].valueChanges,
    //   this.loginForm.controls['password'].statusChanges,
    //   this.loginForm.controls['password'].valueChanges,

    //   this.registerForm.controls['email'].statusChanges,
    //   this.registerForm.controls['email'].valueChanges,
    //   this.registerForm.controls['username'].statusChanges,
    //   this.registerForm.controls['username'].valueChanges,
    //   this.registerForm.controls['password'].statusChanges,
    //   this.registerForm.controls['password'].valueChanges,
    // ).pipe(takeUntilDestroyed())
    // .subscribe(() => this.updateErrorMessage());

    this.loginForm.controls['username'].statusChanges
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateLoginErrorMessage('username'));

  this.loginForm.controls['password'].statusChanges
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateLoginErrorMessage('password'));

  //lắng nghe thay đổi của các thuộc tính trong form đăng ký
  this.registerForm.controls['email'].statusChanges
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateRegisterErrorMessage('email'));

  this.registerForm.controls['username'].statusChanges
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateRegisterErrorMessage('username'));

  this.registerForm.controls['password'].statusChanges
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateRegisterErrorMessage('password'));
  }

  updateErrorMessage() {
    // login
    const usernameControlLogin = this.loginForm.controls['username'];
    const passwordControlLogin = this.loginForm.controls['password'];

    // register
    const emailControlRegister = this.registerForm.controls['email'];
    const usernameControlRegister = this.registerForm.controls['username'];
    const passwordControlRegister = this.registerForm.controls['password'];

    //login, cập nhật thông báo lỗi
    if (usernameControlLogin.hasError('required')) {
      this.usernameErrorMessageLogin.set('You must enter an username');
    } else {
      this.usernameErrorMessageLogin.set('');
    }

    if (passwordControlLogin.hasError('required')) {
      this.passwordErrorMessageLogin.set('You must enter a password');
    } else {
      this.passwordErrorMessageLogin.set('');
    }

    //register, cập nhật thông báo lỗi
    
    if (emailControlRegister.hasError('required')) {
      this.emailErrorMessageRegister.set('You must enter an email');
    } else if (emailControlRegister.hasError('email')) {
      this.emailErrorMessageRegister.set('Not a valid email');
    } else {
      this.emailErrorMessageRegister.set('');
    }

    if (usernameControlRegister.hasError('required')) {
      this.usernameErrorMessageRegister.set('You must enter your full name');
    } else {
      this.usernameErrorMessageRegister.set('');
    }

    if (passwordControlRegister.hasError('required')) {
      this.passwordErrorMessageRegister.set('You must enter a password');
    } else if (passwordControlRegister.hasError('minlength')) {
      this.passwordErrorMessageRegister.set('Password must be at least 3 characters');
    } else {
      this.passwordErrorMessageRegister.set('');
    }
  }

  updateLoginErrorMessage(controlName: string) {
    const usernameControl = this.loginForm.controls['username'];
    const passwordControl = this.loginForm.controls['password'];
  
    if (controlName === 'username') {
      if (usernameControl.hasError('required')) {
        this.usernameErrorMessageLogin.set('You must enter a username');
      } else {
        this.usernameErrorMessageLogin.set('');
      }
    }
  
    if (controlName === 'password') {
      if (passwordControl.hasError('required')) {
        this.passwordErrorMessageLogin.set('You must enter a password');
      } else {
        this.passwordErrorMessageLogin.set('');
      }
    }
  }

  updateRegisterErrorMessage(controlName: string) {
    const emailControl = this.registerForm.controls['email'];
    const usernameControl = this.registerForm.controls['username'];
    const passwordControl = this.registerForm.controls['password'];
  
    if (controlName === 'email') {
      if (emailControl.hasError('required')) {
        this.emailErrorMessageRegister.set('You must enter an email');
      } else if (emailControl.hasError('email')) {
        this.emailErrorMessageRegister.set('Not a valid email');
      } else {
        this.emailErrorMessageRegister.set('');
      }
    }
  
    if (controlName === 'username') {
      if (usernameControl.hasError('required')) {
        this.usernameErrorMessageRegister.set('You must enter your full name');
      } else {
        this.usernameErrorMessageRegister.set('');
      }
    }
  
    if (controlName === 'password') {
      if (passwordControl.hasError('required')) {
        this.passwordErrorMessageRegister.set('You must enter a password');
      } else if (passwordControl.hasError('minlength')) {
        this.passwordErrorMessageRegister.set('Password must be at least 3 characters');
      } else {
        this.passwordErrorMessageRegister.set('');
      }
    }
  }
  

  // đăng kí
  handleRegister() {
    this.authService.register(this.registerForm.value).subscribe();
    window.location.reload();
  }

  //login
  handleLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        // Lấy token từ response
        const jwtToken = response.result.token;

        localStorage.setItem("jwt", jwtToken);
        this.authService.getUserInfo().subscribe();
      }
    });
  }

  //tắt bật form login
  toggleActive() {
    this.isRegister = !this.isRegister;

    //xóa giá trị form
    // this.registerForm.reset();
    // this.loginForm.reset();
  }
}
