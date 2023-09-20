import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  //tiene que es una promesa que devuelva un ValidationErrors o null o un Observable que devuelva ValidationErrors o null
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({ email });

    //forma de regresar un Observable
    return of({
      emailTaken: true,
    }).pipe(
        delay(2000)
    )
  }
}
