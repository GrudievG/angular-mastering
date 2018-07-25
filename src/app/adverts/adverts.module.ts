import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertsRoutingModule } from './adverts-routing.module';
import {AdvertListComponent} from './advert-list/advert-list.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {AdvertItemComponent} from './advert-item/advert-item.component';
import {AdvertService} from './shared/advert.service';
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [AdvertListComponent, AdvertItemComponent, AdvertDetailComponent],
  providers: [AdvertService]
})
export class AdvertsModule { }
