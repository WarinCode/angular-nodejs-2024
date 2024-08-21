import { Component } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  parentMessage: string = "Hello from parent!";
  childResponse: string = "";

  handleChildEvent(response: string){
    this.childResponse = response;
  }
}
