import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleCardComponent {
  @Input() currentPage!:string;

  landingPageAnimate(){
    let ITSS = document.getElementById("ITSS")
    let Verdict = document.getElementById("Verdict")
    let horizonLine = document.getElementById("horizonLine")

    ITSS!.classList.add("landingPage-ITSS")
    Verdict!.classList.add("landingPage-Verdict")
    horizonLine!.classList.add("landingPage-horizonLine")
  }

  menuPage(){
    let titleCard = document.getElementById("titleCard")
    let container = document.getElementById("container")

    titleCard!.classList.add("menuPage-titleCard")
    container!.classList.add("menuPage-container")
  }

  ngOnInit(){
    switch (this.currentPage){
      case "landing-page":
        this.landingPageAnimate()
        break;
      case "menu-page":
        this.menuPage()
        break;
    }
  }
}
