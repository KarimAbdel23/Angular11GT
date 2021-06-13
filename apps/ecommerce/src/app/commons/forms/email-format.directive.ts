import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailFormat]',
  providers: [
    {
      provide:NG_VALIDATORS,
      useExisting: EmailFormatDirective,
      multi: true
    }
  ]
})
export class EmailFormatDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value || '';
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    const isValid = regex.test(value);

    return isValid ? null : { emailFormat: 'El email debe tener el formato user@domain.ext' };
  }

}
