# NgValidation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Code scaffolding

to add in  component
<form [formGroup]="form">
        <validate label="name">
          <input #control formControlName="input" name="input">
        </validate>
      </form>

      
.error-message {
      color:red
    }
    .mandatory-sign {
      color: pink;
    }
for styles
