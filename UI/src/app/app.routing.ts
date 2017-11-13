import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BuildingListComponent } from './components/buildings/building-list.component';
import { ApartmentListComponent } from './components/apartments/apartment-list.component';

const routes: Routes = [
    /*{ path: '', component: AppComponent, data: {title: 'Knight Frank'} },*/
    /*{ path: '**', component: AppComponent, data: {title: 'Knight Frank'} },*/
    {
      path: 'buildings', children: [
        { path: '',     component: BuildingListComponent,   data: {title: 'Список зданий'} },
      ]
    },
    {
      path: 'apartments', children: [
        { path: ':building_id',  component: ApartmentListComponent, data: {title: 'Список квартир в здании'} },
      ]
    }
  ];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
