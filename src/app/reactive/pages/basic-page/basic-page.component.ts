import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 250,
  inStorage: 6,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent implements OnInit {
  //Creación de formulario reactivo
  //public myForm: FormGroup = new FormGroup({
  //  validación sincrona primer [] ;validación asincrona segundo []
  /*   name: new FormControl('', []),
    price: new FormControl(0, []),
    inStorage: new FormControl(0, []),
  }); */
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //this.myForm.reset(rtx5090);
  }

  isValiedField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlegth':
          return `Mínimo ${errors['minlegth'].requiredLength} caracters.`;
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    //cuando he guardado al formulario, vuelve a lo que yo le marco entre llaves {}
    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
