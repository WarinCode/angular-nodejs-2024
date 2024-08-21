import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input() name: string = "";
  responseEvent = output<string>();

  myClick(){
    this.responseEvent.emit("Hello form event.")
  }
}
