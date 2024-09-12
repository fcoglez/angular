import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  // Cuando alguien accede a la raíz de la aplicación (/), Angular lo redirige automáticamente al dashboard (/dashboard), 
  // y con el pathMatch full, indica que la coincidencia debe ser exacta.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
 
  // Cuando no hace match con ninguna de las rutas anteriores, entonces muestra el componente nopagefound
  { path: '**', component: NopagefoundComponent },
];


@NgModule({
  declarations: [
    
  ],
  imports: [
   //En Angular configura las rutas principales de la aplicación. Se utiliza cuando defines el enrutamiento a nivel global, es decir, 
   //cuando estableces las rutas base de la aplicación. (ESTAN SON LAS RUTAS PRINCIPALES DE LA APLICACIÓN)
   RouterModule.forRoot(routes),
   PagesRoutingModule,
   AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
