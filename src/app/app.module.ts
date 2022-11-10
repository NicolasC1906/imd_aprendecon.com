import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Inicio Service JavaScript
import { JavascriptService } from './javascript.service';
// Final Service JavaScript

// Angular Material
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatStepperModule} from '@angular/material/stepper';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import {DialogModule} from '@angular/cdk/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// Angular Material

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
import { LoadingComponent } from './Modules/loading/loading.component';
import { SpinnerInterseptor } from './interceptors/spinner.interceptor';
import { LoginComponent } from './Modules/auth/login/login.component';
import { RegistroComponent } from './Modules/auth/registro/registro.component';
import { RestablecerComponent } from './Modules/auth/restablecer/restablecer.component';
import { CentralComponent } from './pages/central/central.component';
import { BillingComponent } from './pages/payment/billing/billing.component';
import { PaymentsComponent } from './pages/payment/payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdsHeaderComponent,
    CursosComponent,
    ProyectosComponent,
    LiveComponent,
    ReelsComponent,
    LaboratoriosComponent,
    MatriculasComponent,
    FAQComponent,
    SoporteComponent,
    TerminosCondicionesComponent,
    TratamiendoDatosComponent,
    PoliticasPrivacidadComponent,
    ErrorPageComponent,
    HomeComponent,
    LoadingComponent,
    LoginComponent,
    RegistroComponent,
    RestablecerComponent,
    CentralComponent,
    BillingComponent,
    PaymentsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    DialogModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [HttpClient, {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterseptor, multi: true}, JavascriptService, CookieService],
  bootstrap: [AppComponent],
  exports: [LoadingComponent]
})
export class AppModule { }
