import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private Router: Router) { }

  navigateTo(path:string){
    setTimeout(() =>{
      this.Router.navigate([path])
    }, 200) 
  }
}