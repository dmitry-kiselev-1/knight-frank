// Сервис "Здания"

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BaseService } from '../base.service';
import { BuildingModel } from '../../models/building.model';

@Injectable()
export class BuildingService
    extends BaseService {

    constructor(private http: Http) {
        super();
        this.apiRoutePrefix = '/api/buildings/';
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

    public list(): Promise<BuildingModel[]> {
        return this.http.get(
                this.apiDomain + this.apiRoutePrefix,
                this.requestOptions)
            .toPromise()
            .then(response => {
                    return response.json() as BuildingModel[];
                }
            )
            .catch(this.handleError);
    }

  public listApartmentCount(): Promise<BuildingModel[]> {
    return this.http.get(
      this.apiDomain + this.apiRoutePrefix + 'ApartmentCount',
      this.requestOptions)
      .toPromise()
      .then(response => {
          return response.json() as BuildingModel[];
        }
      )
      .catch(this.handleError);
  }
  /*
  public detail(id: number): Promise<BuildingModel> {
    return this.http.get(
      this.apiDomain + this.apiRoutePrefix + id,
      this.requestOptions)
      .toPromise()
      .then(response => {
          return response.json() as BuildingModel;
        }
      )
      .catch(this.handleError);
  }
  */
}
