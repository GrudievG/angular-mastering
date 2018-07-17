import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertListComponent} from './advert-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdvertListRoutingModule { }
