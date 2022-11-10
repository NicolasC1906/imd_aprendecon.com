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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  date: any;
  correoId: any;
  token: any;
  expires: any;
  idUser: any;
  correo: any;
  contrasena: any;
  subscriptions: Subscription[] = [];

  durationInSeconds = 10;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  constructor(private Javascript:JavascriptService, private _snackBar: MatSnackBar,private service:ApiService,private fb: FormBuilder, private cookies:CookieService ) { 
    // Javascript.Carga(["script/landing"])
    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    // const container = document.querySelector(".container");


  }

  ngOnInit(): void {
  }


  login() {
    const user = {correo: this.correo, contrasena: this.contrasena};
    // console.log("Esto es User",user);
    this.service.loginAuth(user).subscribe( data => {
        // console.log(data);

      

      localStorage.setItem("id",data.Datos.id_user)
       this.idUser = data.Datos.id_user;
       localStorage.setItem("token", data.token);
       localStorage.setItem("date", data.Datos.date);
       localStorage.setItem("correo", data.Datos.correo);
       this.correoId = data.Datos.correo;
       this.token = data.token;
       this.date = data.Datos.date;

       this.cookies.set("token", this.token)
       this.cookies.set("idUser", this.idUser)
       this.cookies.set("correoId", this.correoId)
       this.cookies.set("date", this.date)

      //  console.log("Esto es R",data);
      
       /*==============================================
                   Dirigir a cuenta
       /*==============================================*/
       this._snackBar.open('Datos Correctos', "Dirigiendo a Home" , {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
         window.location.href = '#div_id7';

    },(err) => {
    console.log("🚀 ~ file: login.component.ts ~ err", err)
    
      this._snackBar.open('Datos Incorrectos Usuario o Contraseña Incorrectos', "Ingresa Usuario valido" , {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    

    });
  }

  getIdToken(){
    return this.cookies.get("token");
    console.log("🚀 ~ file: login.component.ts ~ line 100 ~ LoginComponent ~ getIdToken ~ this.cookies", this.cookies)
    
  }

  statusLog(){
    return this.cookies.get("token");
  }

}
