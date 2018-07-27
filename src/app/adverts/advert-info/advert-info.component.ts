import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-advert-info',
  templateUrl: './advert-info.component.html',
  styleUrls: ['./advert-info.component.scss']
})
export class AdvertInfoComponent implements OnInit {
  @Input() advert;

  constructor() { }

  ngOnInit() {
  }

}
