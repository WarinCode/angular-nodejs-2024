import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fullName: string = "tavon seesenpila";
}
