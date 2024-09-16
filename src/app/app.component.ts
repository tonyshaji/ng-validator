import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgValidationComponent } from '../../dist/ng-validation';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgValidationComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
// const customMessage = {
//   isNotLargeCase: (name: string, [...args]): string => `${name} should be largecase charecters`,
// }
export class AppComponent {
  title = 'ng-validator';
  form: any;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      input: ['', Validators.required]
    })

  }
}
