import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  subscriptions:Subscription[]=[];
  img:any = [];

  constructor(

    private ApiService: ApiService,

  ) { }

  ngOnInit(): void {
    this.getIMG()
  }

   //API//
   getIMG(){
    // console.log(id)
    //console.log(t his.id);
    this.subscriptions.push(
      this.ApiService
      .getImgLives()  
        .subscribe((r: any) => {
          this.img = r.data.url
          //console.log("datos.text",this.img)
        
        }
        
      ));
    }


}
