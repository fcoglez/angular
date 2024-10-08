import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.routing';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { ComponentsModule } from "../components/components.module";



@NgModule({
  declarations: [
    DashboardComponent,
    Grafic1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    Grafic1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    ComponentsModule
]
})
export class PagesModule { }
