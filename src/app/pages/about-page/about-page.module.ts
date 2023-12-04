import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { TitleCardComponent } from "../../components/title-card/title-card.component";


@NgModule({
    declarations: [
        AboutPageComponent
    ],
    imports: [
        CommonModule,
        AboutPageRoutingModule,
        TitleCardComponent
    ]
})
export class AboutPageModule { }
