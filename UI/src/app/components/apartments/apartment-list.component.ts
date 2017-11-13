import {Component, Input, OnInit} from '@angular/core';
import { BaseComponent } from '../base.component';
import { ApartmentModel } from '../../models/apartment.model';
import { OrderModel } from '../../models/order.model';
import { ApartmentService } from '../../services/apartment/apartment.service';
import { OrderService } from '../../services/order/order.service';

import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apartment-list-component',
  templateUrl: 'apartment-list.component.html'
})
export class ApartmentListComponent extends BaseComponent implements OnInit {

  @Input() buildingid: number;

  public entityList: ApartmentModel[] = [];
  public currentApartment: ApartmentModel = new ApartmentModel();
  public order: OrderModel = new OrderModel();
  public orderStatus: string;

  constructor(
    private apartmentService: ApartmentService,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal) {
    super();
    this.title = 'Список квартир в здании';

    this.buildingid = activatedRoute.snapshot.params['building_id'];
  }

  public ngOnInit() {
    if (this.buildingid) {
      this.apartmentService.forBuilding(this.buildingid)
        .then(items => {
          this.entityList = items as ApartmentModel[];
        })
        .catch(error => {
          this.handleError(error);
        });
    }
  }

  modalFormOpen(content, apartment: ApartmentModel) {
    this.currentApartment = apartment;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private closeResult: string;

  public sendOrder(apartment: ApartmentModel): boolean {
    this.order.apartmentId = apartment.id;
    this.orderService.sendOrder(this.order)
      .then(items => {
        this.orderStatus = `Заказ на квартиру ${apartment.id} успешно отправлен`;
      })
      .catch(error => {
        this.handleError(error);
      });
    return false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
