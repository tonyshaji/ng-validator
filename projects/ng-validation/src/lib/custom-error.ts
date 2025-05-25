import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";


export function lowercaseValidator() : ValidatorFn {

      return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        return value && /^[a-z]+$/.test(value) ? null : { isSmallCase: true };
      };
    
}  
export function uppercaseValidator() : ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && /^[A-Z]+$/.test(value) ? null : { isLargeCase: true };
    };
  
} 

export function alphabetValidator() : ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && /^[A-Za-z]+$/.test(value) ? null : { isNumeric: true };
    };
  
} 

export function alphanumericValidator() : ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && /^[a-zA-Z0-9]+$/.test(value) ? null : { isCode: true };
    };
  
} 

export function urlValidator() : ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && /^(https?:\/\/)?([\w\-]+(\.[\w\-]+)+)(:[0-9]{1,5})?(\/[^\s]*)?$/.test(value) ? null : { isUrl: true };
    };
  
}

export function hexColorCodeValidator() : ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value) ? null : { isColourCode: true };
    };
  
}

export function ipv4Validator() : ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.|$)){4}$/.test(value) ? null : { ipv4: true };
    };
  
}

export function ipv6Validator() : ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|(([0-9a-fA-F]{1,4}:){1,6}:)|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|([0-9a-fA-F]{1,4}:)((:[0-9a-fA-F]{1,4}){1,6}))$/.test(value) ? null : { ipv6: true };
    };
  
}