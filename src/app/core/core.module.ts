import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdvertHttpService} from './providers/advert-http.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AdvertHttpService]
})
export class CoreModule { }
