import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerdictRoutingModule } from './verdict-routing.module';
import { VerdictComponent } from './verdict.component';


@NgModule({
  declarations: [
    VerdictComponent
  ],
  imports: [
    CommonModule,
    VerdictRoutingModule
  ]
})
export class VerdictModule { }
