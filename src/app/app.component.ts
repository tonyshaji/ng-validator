import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgValidationComponent } from '../../dist/ng-validation';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

const customMessage = {
  // isNotLargeCase: (name: string, [...args]): string => `${name} should be largecase charecters`,
  required: (name: string, {...args}): string => `this is invalid`,
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgValidationComponent, FormsModule, ReactiveFormsModule],
  // providers: [{ provide: 'CUSTOM_MESSAGES', useValue: customMessage, }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ng-validator';
  form: any;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      input: ['', Validators.required]
    })

  }
}
