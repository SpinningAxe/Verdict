import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { TitleCardComponent } from "../../components/title-card/title-card.component";


@NgModule({
    declarations: [
        LogInComponent
    ],
    imports: [
        CommonModule,
        LogInRoutingModule,
        TitleCardComponent
    ]
})
export class LogInModule { }
