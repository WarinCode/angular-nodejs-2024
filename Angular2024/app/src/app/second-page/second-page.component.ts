import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css',
})
export class SecondPageComponent {
  public constructor(private http: HttpClient) {}
  public ngOnInit(): void {
    const payload = {
      id: 100,
      name: 'kob',
    };
    this.http
      .delete('https://fakerapi.it/api/v1/persons/1')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
