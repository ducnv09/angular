import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { filter, first, map, Observable, startWith, Subject, switchMap, take, tap, timer } from 'rxjs';

const PASSWORD_PATTERN = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

//call liên tục nếu đủ 6 ký tự
const validateUsernameFromApi = (api: ApiService) => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return api.validateUsername(control.value).pipe(
      map((isValid: boolean) => {
        return isValid ? null : { usenameDuplicated: true };
      })
    );
  }
}

// call sau khi nghỉ 0.3 giây
const validateUsernameFromApiDebounce = (api: ApiService) => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(300).pipe(
      switchMap(() =>
        api.validateUsername(control.value).pipe(
          map((isValid) => {
            if (isValid) {
              return null;
            }
            return { usernameDuplicated: true };
          })
        )
      )
    );
  }
}

const validateMatchedControlsValue = (firstControlName: string, secondControlName: string) => {
  return function (formGroup: FormGroup) {
    const { value: firstControlValue } = formGroup.get(firstControlName) as AbstractControl;
    const { value: secondControlValue } = formGroup.get(secondControlName) as AbstractControl;
    return firstControlValue === secondControlValue ? null : {
      valueNoMatch: {
        firstControlValue,
        secondControlValue
      }
    };
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  formSubmit$ = new Subject<boolean | null>;

  registerForm = this.fb.group({
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[a-z]{6,32}/i),
      ]),
      // validateUsernameFromApi(this.api),
      validateUsernameFromApiDebounce(this.api),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(PASSWORD_PATTERN),
      ]),
    ],
    confirmPassword: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(PASSWORD_PATTERN),
      ]),
    ],
  },
    {
      validators: validateMatchedControlsValue('password', 'confirmPassword'),
    }
  );

  ngOnInit(): void {
    this.formSubmit$.pipe(
      tap(() => this.registerForm.markAsDirty()),
      switchMap(() => this.registerForm.statusChanges.pipe(
        startWith(this.registerForm.status),
        filter((status) => status !== 'PENDING'),
        take(1)
      )),
      filter((status) => status === 'VALID'),
      tap(() => {
        this.submitForm();
      })
    )
    .subscribe();
  }

  submitForm(): void {
    console.log(this.registerForm.value);
  }
}
