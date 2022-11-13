import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Subscription, timer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.scss']
})
export class CentralComponent implements OnInit {
  
  subscriptions:Subscription[]=[];
  data:any = [];
  dataBack:any = [];


  constructor(
    private ApiService: ApiService,
    private cookies:CookieService
  ) { }

  ngOnInit(): void {

this.userVerification()
    
  }

  getInfoCentral(){ 
    this.ApiService
    .getCentralInfo() 
    .subscribe((resp : any) =>{

        this.data = resp.buttons,
        this.dataBack = resp.background
        //console.log("🚀 ", this.dataBack)
        //console.log("esto es resp",resp.data.info.id);

      }
   );
  }

  background(){
    let styles = {
      'background-image': `url(${this.dataBack})`,
      'background-size':"cover",
      'background-position':"center center",
      'max-width':"100%",
      'height':"auto",
      'background-repeat': "no-repeat",
      'background-attachment': "fixed"
      

      
    }
    return styles
  }

  userVerification(){
    if(this.cookies.get("token")){
      // console.log("Inicio Sesion")
      this.getInfoCentral()
    }else{
      console.log("Usuario violo los estatutos de seguridad")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has iniciado sesión en Aprendecon!',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        backdrop: `
        #5624d0
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
        
      }).then((timer) => {
         window.location.href = '/login'
      })
    }
  }
  

}
