import { AsyncPipe } from '@angular/common';
import { Component, ContentChild, ElementRef, Inject, Input, Optional, ViewChild } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ERROR_MESSAGE } from './error-messages';

@Component({
  selector: 'validate',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div #formGroup class="form-group">
      <div>
        {{label}} @if (validator) {<sup class="mandatory-sign">*</sup>}
      </div>
      <div>
        <ng-content></ng-content>
         @if (isControlError) 
          {<div class="error-message">
            {{errorMsg| async}}
          </div>
          }
      </div>
    </div>
  `,
  styles: ``
})
export class NgValidationComponent {
  @Input() label = "field";
  @ContentChild(NgControl) formControl!: NgControl;
  @ContentChild('control') formControlElement!: ElementRef;
  @ViewChild('formGroup') formGroup!: ElementRef;
  isControlError = false;
  requiredStar = false;
  errorMsg = new BehaviorSubject<string>("");

  constructor(@Optional ()@Inject('CUSTOM_MESSAGES') public customMessages: any = {} ) { }

  ngAfterViewInit(): void {
    this.formControl?.control?.valueChanges.subscribe(value => {
      if (this.formControl && this.formControl.control && this.formControl.control.errors) {
        this.formGroup.nativeElement.classList.add('e-error');
        this.isControlError = true;
        this.errorMsg.next(this.getErrorMessage(this.formControl, this.label));
      }
      if (this.formControl && this.formControl.control && !this.formControl.control.errors) {
        this.formGroup.nativeElement.classList.remove('e-error');
        this.isControlError = false;
      }
    })
  }

  get validator() {
    return this?.formControl?.control?.hasValidator(Validators.required)
  }
  getErrorMessage(formControl: NgControl, field: string) {
    let name: string = field || 'This Field';
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (formControl.invalid) {
      const errors: any = formControl.control?.errors
      const [errorKey] = Object.keys(errors)
      let message = `${name}  is invalid`;
      if ( this.customMessages &&errorKey in this.customMessages) {
        
        return this.customMessages[errorKey as keyof typeof this.customMessages](name, errors[errorKey]);
      } else if (errorKey in ERROR_MESSAGE) {
        return ERROR_MESSAGE[errorKey as keyof typeof ERROR_MESSAGE](name, errors[errorKey]);
      }

      return message;
    }
    return (`${name}  is invalid`)

  }

}
