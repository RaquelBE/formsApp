import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required, cantBeStrider]],
    password: ['', Validators.required, Validators.minLength(6)],
    password2: ['', [Validators.required]],
  });

  constructor (private fb: FormBuilder){}

  isValidField( field: string) {
    //TODO: obtener validación desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
