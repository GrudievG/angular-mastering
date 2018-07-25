import {Component, OnInit} from '@angular/core';
import {AdvertService} from '../shared/advert.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {
  advertList;

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
    this.getAdvertList();
  }

  getAdvertList() {
    this.advertService.getAdvertList('0', '12')
      .subscribe((response: any) => {
        console.log(response);
        this.advertList = response.results;
      }, error => console.log(error));
  }

}
