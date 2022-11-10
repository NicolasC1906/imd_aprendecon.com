import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Subscription, timer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  subscriptions:Subscription[]=[];
  constructor(
    private ApiService: ApiService,
    private cookies:CookieService,
    private _formBuilder: FormBuilder
  ) { }

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
        confirmButtonText: 'iniciar Sesion!',
       
        backdrop: `
        #5524d037
  `
        
        
      }).then((result) => {
        if (result.isConfirmed) {
  
          window.location.href = '/login'
        }
      });
    }
  }



}
