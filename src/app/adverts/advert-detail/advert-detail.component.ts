import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdvertService} from '../shared/advert.service';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss']
})
export class AdvertDetailComponent implements OnInit {
  advert;

  constructor(
    private route: ActivatedRoute,
    private advertService: AdvertService) { }

  ngOnInit() {
    this.getAdvertDetail();
  }
  getAdvertDetail() {
    const pk = this.route.snapshot.paramMap.get('pk');
    this.advertService.getAdvertDetail(pk)
      .subscribe((response: any) => {
        this.advert = response;
        console.log(this.advert);
      }, error => console.log(error));
  }
}
