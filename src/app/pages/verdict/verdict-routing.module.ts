import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerdictComponent } from './verdict.component';

const routes: Routes = [{ path: '', component: VerdictComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerdictRoutingModule { }
