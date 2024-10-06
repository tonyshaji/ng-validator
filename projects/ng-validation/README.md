# ng-form-group-validation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Usage
This library gives validation messages with minmal coding for angular reactive forms. the styling of  labels, form controls, error message  have been  created with flexibility  in usage. the asterisk symbol which indicates  the field is mandatory is also taken care of by ### ng-form-group-validation. to add the symbol add Validators.Required to the form control
### Adding to code
To add in  component
```
@Component({
  selector: 'app-root',
  standalone: true,
imports: [ NgValidationComponent, FormsModule, ReactiveFormsModule],
...
})
```

in html
``` <form [formGroup]="form">
        <validate label="name">
          <input #control formControlName="input" name="input">
        </validate>
    </form>
```
By using this compenent, you  have access to the formControls in your component enabling you to show, hide, disable, or enable the form controls based on other form controls or other variables in the component

### added messages
| 	Error     | 	Message	                                              | 	
| 	-----	    | 	----- 	                                              | 	
| 	required	| 	label is required	                                    | 	
| 	minlength	| 	label cannot be less than requiredLength" characters`	| 	 
| 	maxlength	| 	label cannot be more than "requiredLength" characters	| 	 
| 	min	      | 	label cannot be less than "min"	                      | 	
| 	max	      | 	label cannot be more than "max"	                      |
| 	email	    | 	label is not a valid email	                          |

### custom messages
To use custom messsages or messages for  custom validators create  a constant in following format.
```
    export const messages = {
        error_name: (name: string, args): string => `${name} is invalid`,
    }
```
error_name is the name of the error from validator.
name is the variable for label. you may or may not use it in the message

this custom message can be injected to  module or component using dependency injection  as follows
```
providers: [{ provide: 'CUSTOM_MESSAGES', useValue: messages }]
```
### styles
validate component will give a  div with `.form-group` class. this div  contains 2 divs in it for   label and  the form control. You can use flex-direction to align content horizontally or vertically

for styles
```
.error-message {
      color:red
    }
    .mandatory-sign {
      color: pink;
    }
```
use `.error-message` and `.mandatory-sign` classes to give styles for error message string and  asterisk symbol indicating star symbol

