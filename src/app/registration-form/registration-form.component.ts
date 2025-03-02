import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      console.log('Form data to be sent:', formData);

      this.http.post('http://localhost:3000/save-data', formData).subscribe({
        next: (response) => console.log('Дані успішно відправлено', response),
        error: (error) => console.error('Помилка надсилання даних', error),
      });
    }
  }
}
