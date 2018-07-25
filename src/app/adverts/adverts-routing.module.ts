import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertListComponent} from './advert-list/advert-list.component';
import {AdvertDetailComponent} from './advert-detail/advert-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AdvertListComponent },
  { path: 'detail/:id', component: AdvertDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertsRoutingModule { }
