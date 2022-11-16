import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { NavbarComponent } from './Modules/navbar/navbar.component';
import {FooterComponent } from  './Modules/footer/footer.component';
import {AdsHeaderComponent } from  './Modules/ads-header/ads-header.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { LiveComponent } from './pages/live/live.component';
import { ReelsComponent } from './pages/reels/reels.component';
import { LaboratoriosComponent } from './pages/laboratorios/laboratorios.component';
import { MatriculasComponent } from './pages/matriculas/matriculas.component';
import { FAQComponent } from './pages/faq/faq.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';
import { TratamiendoDatosComponent } from './pages/tratamiendo-datos/tratamiendo-datos.component';
import { PoliticasPrivacidadComponent } from './pages/politicas-privacidad/politicas-privacidad.component';
import { ErrorPageComponent } from './Modules/error-page/error-page.component';
import { HomeComponent } from './Modules/home/home.component';
import { AppComponent } from './app.component';
import { LoadingComponent } from './Modules/loading/loading.component';
import { LoginComponent } from './Modules/auth/login/login.component';
import { RegistroComponent } from './Modules/auth/registro/registro.component';
import { RestablecerComponent } from './Modules/auth/restablecer/restablecer.component';
import { CentralComponent } from './pages/central/central.component';
import { BillingComponent } from './pages/payment/billing/billing.component'; 
import { AuthGuard } from './Modules/auth/auth.guard';
import { PayaceptComponent } from './pages/payment/payacept/payacept.component';
import { PaydeclinedComponent } from './pages/payment/paydeclined/paydeclined.component';



const routes: Routes = [
  
  {path: '', component: HomeComponent},

 

  {path: 'faq', component: FAQComponent},
  {path: 'soporte', component: SoporteComponent},
  {path: 'terminos-condiciones', component:TerminosCondicionesComponent},
  {path: 'PoliticasPrivacidad', component: PoliticasPrivacidadComponent},
  {path: 'TratamiendoDatos', component: TratamiendoDatosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'restablecer', component: RestablecerComponent},
  {path: 'central', component: CentralComponent},
  {path: 'billing/:id_suscripcion', component: BillingComponent, canActivate:[AuthGuard]},
  {path: 'confirmed', component: PayaceptComponent, canActivate:[AuthGuard]},
  {path: 'declined', component: PaydeclinedComponent, canActivate:[AuthGuard]},
  {path: 'central', component: CentralComponent, canActivate:[AuthGuard]},
  {path: '**', pathMatch:"full", component: ErrorPageComponent},// encima de este siempre billing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
