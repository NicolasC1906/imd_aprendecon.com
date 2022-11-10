import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JavascriptService } from 'src/app/javascript.service';
import {MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.scss']
})
export class RestablecerComponent implements OnInit {

  mensaje: any;
  correoId: any;
 
  correo: any;
  subscriptions: Subscription[] = [];

  durationInSeconds = 20;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  mng: any;
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  constructor(
    private Javascript:JavascriptService, private _snackBar: MatSnackBar,private service:ApiService,private fb: FormBuilder, private cookies:CookieService
  ) { }

  ngOnInit(): void {
  }

  restablercerUser() {
    const user = {correo: this.correo};
    // console.log("Esto es User",user);
    this.service.restableceUser(user).subscribe( data => {
        // console.log(data);
       localStorage.setItem("statusRestablecer", data.status);
       this.correoId = data.correo;
       
       this.mensaje = data.mensaje;
       localStorage.setItem("mensaje", data.mensaje);
       this.mng = localStorage.getItem("mensaje");
      //  console.log("Esto es R",data);
      
       /*==============================================
                   Dirigir a cuenta
       /*==============================================*/
       this._snackBar.open("🚀 Estimado usuario revisa tu bandeja de entrada o spam.",  this.mng, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
        //  window.location.href = '/login';

    },(err) => {
    console.log("🚀 ~ file: login.component.ts ~ err", err)
    
      this._snackBar.open('Datos Incorrectos Usuario Incorrecto', err , {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    

    });
  }

}
