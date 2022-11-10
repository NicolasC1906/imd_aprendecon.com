import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Subscription } from 'rxjs';
import { JavascriptService } from 'src/app/javascript.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getRecientsCourses: any= [];
  getCategoryCourses:  any= [];
  getTotalCourses: any= [];


  constructor( private ApiService: ApiService, private Javascript:JavascriptService ) { 

    Javascript.Carga(["script/landing"])



  }

  ngOnInit(): void {
    this.getRecientCourse()
    this.getCategoryCourse()
    this.getAllCourse()
  }

  //Cursos recientes

  getRecientCourse(){ 
    this.ApiService
    .getRecientCourse() 
    .subscribe((resp : any) =>{

      let i;
      // for(i in resp){
        
        this.getRecientsCourses = resp.data.info
        //console.log("🚀 ", this.getRecientsCourses)
        //console.log("esto es resp",resp.data.info.id);

      }

    // }
   );


  }

  //Categorias Cursos

  getCategoryCourse(){ 
    this.ApiService
    .getCategoriasCourse() 
    .subscribe((resp : any) =>{

      let i;
      // for(i in resp){
        
        this.getCategoryCourses = resp.data.info
        //console.log("🚀 ", this.getCategoryCourses)
        //console.log("esto es resp",resp.data.info.id);

      }

    // }
   );


  }

  //Categorias Cursos

  getAllCourse(){ 
    this.ApiService
    .getTotalCourse() 
    .subscribe((resp : any) =>{

      let i;
      // for(i in resp){
        
        this.getTotalCourses = resp.data.info
        //console.log("🚀 ", this.getTotalCourses)
        //console.log("esto es resp",resp.data.info.id);

      }

    // }
   );


  }

}
