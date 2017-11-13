import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { BuildingService } from '../../services/buildings/building.service';
import { BuildingModel } from '../../models/building.model';

@Component({
  selector: 'app-building-list-component',
  templateUrl: 'building-list.component.html'
})
export class BuildingListComponent extends BaseComponent implements OnInit {

  public entityList: BuildingModel[] = [];

  constructor(
    private buildingService: BuildingService) {
    super();
    this.title = 'Список зданий';
  }

  public ngOnInit() {
    this.buildingService.listApartmentCount()
      .then(items => {
        this.entityList = items as BuildingModel[];
      })
      .catch(error => {
        this.handleError(error);
      });
  }
}
