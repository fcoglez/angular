import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  //RUTAS PROTEGIDAS (hay que estar autenticado)
  { path: 'dashboard', 
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafic1', component: Grafic1Component },

    ]
  },
];

@NgModule({

  // RouterModule.forChild(routes) -> permite a un módulo secundario gestionar su propio conjunto de rutas de forma local, facilitando la modularización de la aplicación Angular,
  // y permite que estas rutas sean cargadas y manejadas junto con las rutas del módulo principal.
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
