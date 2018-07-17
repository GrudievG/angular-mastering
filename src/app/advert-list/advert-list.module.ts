import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdvertListComponent} from './advert-list.component';
import { AdvertListRoutingModule } from './advert-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdvertListRoutingModule
  ],
  declarations: [AdvertListComponent]
})
export class AdvertListModule { }
