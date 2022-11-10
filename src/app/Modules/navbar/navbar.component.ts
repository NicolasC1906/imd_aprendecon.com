import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id: any;
  userToken: boolean | undefined;
  userLogout: boolean | undefined;
  subscriptions: Subscription[] = [];
  users:any = [];
  username: any;
  nombre: any;
  apellido: any;
  id_membresia: any;
  id_especialidad: any;
  rolName: any;
  userFree: boolean | undefined;
  userNofree: boolean | undefined;

  constructor(private cookies:CookieService, private service:ApiService) { }

  ngOnInit() {
  this.getIdToken()
  this.getInfo()

  }

  getIdToken(){
    if(this.cookies.get("token")){
      this.userToken = true
      this.userLogout = false
    }else{
      this.userToken = false
      this.userLogout = true
    }
    
  }

  statusLog(){
    return this.cookies.get("token");
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


  getInfo(){
    // console.log("entro o no")
    this.id = localStorage.getItem("id")
    this.subscriptions.push(
        this.service.getUsersById(this.id)
        .subscribe((r: any) => {
          //console.log("🚀 ~ file: navbar.component.ts ~ line 108 ~ NavbarComponent ~ .subscribe ~ r", r)
           this.username = r.username,
           this.nombre = r.nombre
           this.apellido = r.apellido
           this.id_membresia = r.id_membresia
           this.id_especialidad = r.id_especialidad
           
           if(this.id_membresia === 0){

            this.rolName = "Usuario Free"
            this.userFree = true
            this.userNofree = false

           }else{
            this.rolName = "User membresia"
            this.userFree = false
            this.userNofree = true
           }

            // this.users.push({
            //    "username":r.username,
              
            // }    
        }

        ));
        
        
      }

}

        
