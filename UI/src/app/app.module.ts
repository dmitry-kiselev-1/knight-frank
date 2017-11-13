import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { BuildingListComponent } from './components/buildings/building-list.component';
import { ApartmentListComponent } from './components/apartments/apartment-list.component';

import { AppMenuComponent } from './components/layout/app.menu.component';
import { AppContentComponent } from './components/layout/app.content.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuildingService } from './services/buildings/building.service';
import { ApartmentService } from './services/apartment/apartment.service';
import { OrderService } from './services/order/order.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppContentComponent,
    BuildingListComponent,
    ApartmentListComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    AppRoutes
  ],
  providers: [BuildingService, ApartmentService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
