import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoWhiteSpaceValidator } from '../shared/validators/no-white-space.validator';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrl: './sign-in-rf.component.css'
})
export class SignInRfComponent {

  // signInForm = new FormGroup({
  //   username: new FormControl(''), //defaut value
  //   password: new FormControl(''),
  //   rememberMe: new FormControl(false),
  // });

  constructor(private fb: FormBuilder) {}

  signInForm = this.fb.group({
    // username: '',
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern(/^[a-z]{6, 32}$/i),  
        NoWhiteSpaceValidator
      ]),
    ],
    // password: '',
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
      ]),
    ],
    rememberMe: false,
  });

  // đồng bộ 
  username = new FormControl("", Validators.minLength(6));
  control = this.fb.control('', Validators.minLength(6));

  ngOnInit(): void {

    // form control thì 2 cách thay đổi như nhau
    // this.signInForm.controls.username.setValue('Trung');
    // this.signInForm.controls.username.patchValue('Duc');

    // this.signInForm.setValue({
    //   username: 'Duc',
    //   password: '123',
    //   rememberMe: true,
    // });

    // this.signInForm.patchValue({
    //   password: '45788',
    // });
  }

  onSubmit(): void {
    console.log(this.signInForm);
  }
}
