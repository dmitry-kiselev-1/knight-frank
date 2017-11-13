// Сервис "Заказ (просмотра квартир)"

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BaseService } from '../base.service';
import { OrderModel } from '../../models/order.model';

@Injectable()
export class OrderService
    extends BaseService {

    constructor(private http: Http) {
        super();
        this.apiRoutePrefix = '/api/requests/';
    }

  public sendOrder(order: OrderModel): Promise<string> {
    return this.http.post(
      this.apiDomain + this.apiRoutePrefix,
      order,
      this.requestOptions)
      .toPromise()
      .then(response => {
          return response;
        }
      )
      .catch(this.handleError);
  }

}
