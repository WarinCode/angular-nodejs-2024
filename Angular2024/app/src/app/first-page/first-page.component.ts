import { Component } from '@angular/core';
import { ActivatedRoute,  ParamMap } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
  public id: number = 0;

  public constructor(private route: ActivatedRoute){}

  public ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get("id"));
    })
    console.log("first page init.");
  }
}
