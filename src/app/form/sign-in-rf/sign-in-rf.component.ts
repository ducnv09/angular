import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    username: '',
    password: '',
    rememberMe: false,
  });

  ngOnInit(): void {

    // form control thì 2 cách thay đổi như nhau
    this.signInForm.controls.username.setValue('Trung');
    this.signInForm.controls.username.patchValue('Duc');

    this.signInForm.setValue({
      username: 'Duc',
      password: '123',
      rememberMe: true,
    });

    this.signInForm.patchValue({
      password: '45788',
    });
  }

  onSubmit(): void {
    console.log(this.signInForm);
  }
}
