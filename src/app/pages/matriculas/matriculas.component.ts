import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss'] 
})
export class MatriculasComponent implements OnInit {

  subscriptions:Subscription[]=[];
  

  plan1:any = [];
  plan2:any = [];
  plan3:any = [];
  plan4:any = [];
  plan5:any = [];
  plan6:any = [];

  data:any = [];
  getFaq:any = [];
  dataFAQ:any = [];

  constructor(

    private ApiService: ApiService,

  ) { }

  ngOnInit(): void {
    this.getPrice()
    this.getFaqMatriculas()
  }

  getPrice(){
    // console.log(id)
    //console.log(t his.id);
    this.subscriptions.push(
      this.ApiService
      .getPrice()  
        .subscribe((r: any) => {
          this.data = r.data
          this.plan1 = {
            "id":this.data[0].id, 
            "id_suscripcion":this.data[0].id_suscripcion, 
            "nombre":this.data[0].nombre,
            "precio":this.data[0].precio
          }
          this.plan2 = {
            "id_suscripcion":this.data[1].id_suscripcion,
            "nombre":this.data[1].nombre,
            "precio":this.data[1].precio
          }
          this.plan3 = {
            "id_suscripcion":this.data[2].id_suscripcion,
            "nombre":this.data[2].nombre,
            "precio":this.data[2].precio
          }
          this.plan4 = {
            "id_suscripcion":this.data[3].id_suscripcion,
            "nombre":this.data[3].nombre,
            "precio":this.data[3].precio
          }
          this.plan5 = {
            "id_suscripcion":this.data[4].id_suscripcion,
            "nombre":this.data[4].nombre,
            "precio":this.data[4].precio
          }
          this.plan6 = {
            "id_suscripcion":this.data[5].id_suscripcion,
            "nombre":this.data[5].nombre,
            "precio":this.data[5].precio
          }
          //console.log("datos.text",this.plan1)
        
        }
        
      ));
    }

  getFaqMatriculas(){ 
    this.ApiService
    .getFaqMatriculas() 
    .subscribe((resp : any) =>{

        this.getFaq = resp.data
        //console.log("🚀 ", this.getRecientsCourses)
        //console.log("esto es resp",resp.data.info.id);

      }
   );
  }


}
