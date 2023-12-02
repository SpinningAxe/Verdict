import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { TitleCardComponent } from "../../components/title-card/title-card.component";


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        TitleCardComponent
    ]
})
export class LandingPageModule { }
