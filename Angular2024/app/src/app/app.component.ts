import { Component, input, InputSignal, model, ModelSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'app';
  isAdmin: boolean = false;
  users: string[] = ["kob", "mali", "joy"]
  fname: string = "";
  lname: string = "";
  checked: ModelSignal<boolean> = model(false);
  disabled: InputSignal<boolean> = input(false);

  myFunction(): void{
    alert("my alert here");
  }

  toggle(): void{
    this.checked.set(!this.checked());
  }
}
