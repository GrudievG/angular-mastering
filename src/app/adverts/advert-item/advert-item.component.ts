import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-advert-item',
  templateUrl: './advert-item.component.html',
  styleUrls: ['./advert-item.component.scss']
})
export class AdvertItemComponent implements OnInit {
  @Input() advert;

  constructor() { }

  ngOnInit() {
    // console.log(this.advert);
  }

}
