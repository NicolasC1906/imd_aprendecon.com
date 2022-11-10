import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { JavascriptService } from 'src/app/javascript.service';
import {MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
  import Swal from 'sweetalert2';
  import { Subscription } from 'rxjs';
  import { ApiService } from 'src/services/api.service';
  import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  correo: any;
  contrasena: any;
  name: any;
  surname: any;
  cell: any;
  subscriptions: Subscription[] = [];

  durationInSeconds = 10;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]); 
  nombre = new FormControl('', [Validators.required]);
  apellido = new FormControl('', [Validators.required]);
  confim_password = new FormControl('', [Validators.required]);
  tell = new FormControl('', [Validators.required]);
  hide = true;
  id_rol: any;
  idUser: any;
  token: any;
  date: any;
  correoId: any;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  constructor(private Javascript:JavascriptService, private _snackBar: MatSnackBar,private service:ApiService,private fb: FormBuilder,private cookies:CookieService) { 

    // Javascript.Carga(["script/landing"])
    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    // const container = document.querySelector(".container");

  }

  ngOnInit(
    
  ): void {
  }

  registrer() {
    this.id_rol =  1;
    const user = {nombre: this.name, apellido: this.surname, correo: this.correo, contrasena: this.contrasena, telefono: this.cell, id_rol: this.id_rol};
    console.log("Esto es User",user);
    this.service.registrer(user).subscribe( data => {
      
       console.log(data);

       
       {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro Exitoso',
          showConfirmButton: false,
          timer: 2500
        })
        
        localStorage.setItem("CorreoRegistrer",this.correo)
        localStorage.setItem("ContrasenaRegistrer",this.contrasena)
        const user = {correo: localStorage.getItem("CorreoRegistrer"), contrasena: localStorage.getItem("ContrasenaRegistrer")};
        this.service.loginAuth(user).subscribe( data => {
          // console.log(data);
  
        
  
        localStorage.setItem("id",data.Datos.id_user)
         this.idUser = data.Datos.id_user;
         localStorage.setItem("token", data.token);
         localStorage.setItem("date", data.Datos.date);
         localStorage.setItem("correo", data.Datos.correo);
         this.correo = data.Datos.correo;
         this.token = data.token;
         this.date = data.Datos.date;
         this.correoId = data.Datos.correo;

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
      console.log("🚀 ~ file: login.component.ts ~ err", err.error)
      
        this._snackBar.open('Datos Incorrectos Usuario o Contraseña Incorrectos', err.error , {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      
  
      });
        //window.location.href = '/login';
      }
    },(err) => {
      let mgn = err.error
    console.log("🚀 ~ file: login.component.ts ~ err", mgn.error)
    
      this._snackBar.open('Error:',  mgn.error, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    

    });
  }

  logout(){
    Swal.fire({
      title: '¿Estas seguro que desea cerrar sesion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cerrar Sesion!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('date');
        localStorage.removeItem('correo');
        this.cookies.delete("token")
        this.cookies.delete("idUser")
        this.cookies.delete("correoId")
        this.cookies.delete("date")

        window.location.href = '/'
      }
    });
    ;
  }

}
