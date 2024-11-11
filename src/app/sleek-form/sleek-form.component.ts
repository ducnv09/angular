import { Component } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';  // Import MatNativeDateModule

@Component({
  selector: 'app-sleek-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,  // Add MatNativeDateModule here
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sleek-form.component.html',
  styleUrl: './sleek-form.component.scss'
})
export class SleekFormComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: [''],
      dateOfBirth: [''],
      address: [''],
      select: ['pakistan'], 
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
