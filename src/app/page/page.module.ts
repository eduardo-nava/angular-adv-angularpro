import { NgModule } from '@angular/core';
//import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './page.routing.module';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PageComponent } from './page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [
    DashboardComponent ,
    ProgressComponent,
    Grafica1Component,
    PageComponent,
    AccountSettingsComponent,
    ObservablesComponent
  ],
  exports: [
    DashboardComponent ,
    ProgressComponent,
    Grafica1Component,
    PageComponent,
    AccountSettingsComponent,
    ObservablesComponent

  ],
  imports: [ 
    CommonModule, 
    PageRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PageModule { }
