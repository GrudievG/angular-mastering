import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';

import {ApiConfig} from '../../helpers/api-config';

@Injectable()
export class AdvertHttpService {

  constructor(private http: HttpClient) { }

  getAdvertList(options) {
    return this.http.get(ApiConfig.adverts, options)
      .pipe(
        retry(3)
      );
  }
}
