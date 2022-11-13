import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Subscription, timer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { JavascriptService } from 'src/app/javascript.service';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  
  date: number = new Date().getDate();
  mount: number = new Date().getMonth();
  anio: number = new Date().getFullYear();

  hour: number = new Date().getHours();
  minute: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();

  fulldate:any = (this.date, this.mount) ;

  correo: any;
  contrasena: any;
  name: any;
  surname: any;
  cell: any;
  textoDeInput: any;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]); 
  nombre = new FormControl('', [Validators.required]);
  apellido = new FormControl('', [Validators.required]);
  confim_password = new FormControl('', [Validators.required]);
  tell = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }
  policy = this._formBuilder.group({
    TerminosCondiciones : false,
    TratamiendoDatos: false,
    PolíticasPrivacidad: false,
  });

  

  subscriptions:Subscription[]=[];
paymentForm: any;
  constructor(
    private ApiService: ApiService,
    private cookies:CookieService,
    private _formBuilder: FormBuilder,
    private Javascript:JavascriptService
  ) { 
    Javascript.Carga(["script/credit"])
  }
 

  ngOnInit(): void {
    this.userVerification()
  }

  userVerification(){
    if(this.cookies.get("token")){
      console.log("Inicio Sesion")
      
    }else{
      console.log("Usuario violo los estatutos de seguridad")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Para continuar te invitamos a registrarte o iniciar sesión en Aprendecon!',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        backdrop: `
        #5524d0c0 `
        
        
      }).then((timer) => {
         window.location.href = '/login'
      })
      
      
        
  
          
        
      
    }
  }



}
