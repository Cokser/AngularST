import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'validator-messages',
  templateUrl: './validator-messages.component.html',
  styleUrls: ['./validator-messages.component.scss']
})
export class ValidatorMessagesComponent {

  @Input() field: FormControl;

  public get validatorMessages() {

    const field = this.field;

    if ( !field || !field.errors ) {

      return false;

    }

    const errors = [];

    const config = {

      required: 'Обязательное поле!'
    };

    if ( field.errors.hasOwnProperty('maxlength') ) {

      config['maxlength'] = `Вы ввели больше ${ field.errors.maxlength.requiredLength} символов!`;

    }

    Object.keys(field.errors).forEach((error: string) => {

      errors.push(config[error]);

    });

    return errors;
  }

}
