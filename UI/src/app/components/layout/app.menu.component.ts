import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base.component';
import {BuildingService} from '../../services/buildings/building.service';
import {ApartmentService} from '../../services/apartment/apartment.service';

@Component({
  selector: 'app-menu',
  template: `
    <div style="text-align:center; border: solid; border-color: darkcyan; border-width: thin; padding: 8px;">
      <div style="text-align:left; color: darkcyan">БЛОК МЕНЮ</div>
<!--
      <h1 style="color: lightgrey">
        Welcome to {{title}}!
      </h1>
-->
      <a routerLink="/" style="padding: 10px;">Главная страница</a>
      <a routerLink="/buildings" style="padding: 10px;">Здания</a>

      <br/>
      <div style="text-align:left;">
        <span style="padding: 10px;">Домов: {{buildingCount}}</span>
        <span style="padding: 10px;">Квартир: {{apartmentCount}}</span>
      </div>
    </div>
  `
})
export class AppMenuComponent extends BaseComponent implements OnInit {

  public buildingCount: number;
  public apartmentCount: number;

  constructor(
    private buildingService: BuildingService,
    private apartmentService: ApartmentService) {
    super();
    this.title = 'Knight Frank';
  }

  public ngOnInit() {
    this.buildingService.сount()
      .then(item => { this.buildingCount = item as number; })
      .catch(error => { this.handleError(error); });

    this.apartmentService.сount()
      .then(item => { this.apartmentCount = item as number; })
      .catch(error => { this.handleError(error); });
  }
}
