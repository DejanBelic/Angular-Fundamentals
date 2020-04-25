import { Directive } from '@angular/core';
import {Form, FormGroup} from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]'
})
export class LocationValidatorDirective {

  constructor() { }
  validate(formGroup: FormGroup): {[key: string]: any} {
    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    const onlineUrl = (<FormGroup> formGroup.root).controls.onlineUrl;
    // tslint:disable-next-line:max-line-length
    if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrl && onlineUrl.value)) {
      return null;
    } else { return {validateLocation: false }; }
  }
}
