import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [

  //RUTAS PROTEGIDAS (hay que estar autenticado)
  { path: '', 
    component: PagesComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafic1', component: Grafic1Component },

      // Cuando alguien accede a la raíz de la aplicación (/), Angular lo redirige automáticamente al dashboard (/dashboard), 
      // y con el pathMatch full, indica que la coincidencia debe ser exacta.
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  
  //RUTAS PUBLICAS
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },



  
  
  // Cuando no hace match con ninguna de las rutas anteriores, entonces muestra el componente nopagefound
  { path: '**', component: NopagefoundComponent },
];


@NgModule({
  declarations: [
    
  ],
  exports: [
    RouterModule
  ],
  imports: [
   //En Angular configura las rutas principales de la aplicación. Se utiliza cuando defines el enrutamiento a nivel global, es decir, 
   //cuando estableces las rutas base de la aplicación. (ESTAN SON LAS RUTAS PRINCIPALES DE LA APLICACIÓN)
   RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
