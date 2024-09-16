# ng-form-group-validation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Usage

to add in  component
```
@Component({
  selector: 'app-root',
  standalone: true,
imports: [ NgValidationComponent, FormsModule, ReactiveFormsModule],
...
})
```

in html
```<form [formGroup]="form">
        <validate label="name">
          <input #control formControlName="input" name="input">
        </validate>
      </form>
```

for styles
```.error-message {
      color:red
    }
    .mandatory-sign {
      color: pink;
    }
```
for styles
