import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form-validate',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './my-form-validate.component.html',
  styleUrl: './my-form-validate.component.css'
})
export class MyFormValidateComponent {
  name = new FormControl("");
}
