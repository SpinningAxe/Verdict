import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verdict',
  templateUrl: './verdict.component.html',
  styleUrls: ['./verdict.component.scss']
})
export class VerdictComponent {
  constructor(private Router: Router) { }

  navigateTo(path:string){
    this.Router.navigate([path])
  }
}
