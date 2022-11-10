import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.scss']
})
export class ReelsComponent implements OnInit {

  subscriptions:Subscription[]=[];
  img:any = [];

  constructor(

    private ApiService: ApiService,

  ) { }

  ngOnInit(): void {
    this.getIMG()
  }

  getIMG(){
    // console.log(id)
    //console.log(t his.id);
    this.subscriptions.push(
      this.ApiService
      .getImgReels()  
        .subscribe((r: any) => {
          this.img = r.data.url
          //console.log("datos.text",this.img)
        
        }
        
      ));
    }
 
}
