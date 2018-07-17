import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './header.component';
import { UserBlockComponent } from './user-block/user-block.component';
import { SearchBlockComponent } from './search-block/search-block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, UserBlockComponent, SearchBlockComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
