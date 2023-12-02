import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPageRoutingModule } from './menu-page-routing.module';
import { MenuPageComponent } from './menu-page.component';
import { TitleCardComponent } from "../../components/title-card/title-card.component";


@NgModule({
    declarations: [
        MenuPageComponent
    ],
    imports: [
        CommonModule,
        MenuPageRoutingModule,
        TitleCardComponent
    ]
})
export class MenuPageModule { }
