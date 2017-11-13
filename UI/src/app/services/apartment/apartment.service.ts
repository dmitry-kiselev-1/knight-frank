// Сервис "Квартиры"

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BaseService } from '../base.service';
import { ApartmentModel } from '../../models/apartment.model';

@Injectable()
export class ApartmentService
    extends BaseService {

    constructor(private http: Http) {
        super();
        this.apiRoutePrefix = '/api/apartments/';
    }

  public сount(): Promise<number> {
    return this.http.get(
      this.apiDomain + this.apiRoutePrefix + 'count',
      this.requestOptions)
      .toPromise()
      .then(response => {
          return (response.json() as {count: number}).count;
        }
      )
      .catch(this.handleError);
  }

  public forBuilding(buildingid: number): Promise<ApartmentModel[]> {
    return this.http.get(
      this.apiDomain + this.apiRoutePrefix + 'forBuilding?buildingid=' + buildingid,
      this.requestOptions)
      .toPromise()
      .then(response => {
          return response.json() as ApartmentModel[];
        }
      )
      .catch(this.handleError);
  }

}
