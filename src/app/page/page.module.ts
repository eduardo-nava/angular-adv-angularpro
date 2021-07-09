import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    DashboardComponent ,
    ProgressComponent,
    Grafica1Component,
    PageComponent,
  ],
  exports: [
    DashboardComponent ,
    ProgressComponent,
    Grafica1Component,
    PageComponent,
  ],
  imports: [ 
    CommonModule, 
    AppRoutingModule,
    SharedModule
  ]
})
export class PageModule { }