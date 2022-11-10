import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  
})
export class CursosComponent implements OnInit {

  showNavigationArrows = true;
	showNavigationIndicators = true;
  
	

  img:any = [];
  subscriptions:Subscription[]=[];

  constructor(
    config: NgbCarouselConfig,
    private ApiService: ApiService,) {

    // customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
    this.getIMG()
  }


    //API - BANNERS//
    getIMG(){
      // console.log(id)
      //console.log(t his.id);
      this.subscriptions.push(
        this.ApiService
        .getImgCursos()  
          .subscribe((r: any) => {
            this.img = r.data.url
            //console.log("datos.text",this.img)
          
          }
          
        ));
      }
}
