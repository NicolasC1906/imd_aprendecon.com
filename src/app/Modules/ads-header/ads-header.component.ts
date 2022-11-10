import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-ads-header',
  templateUrl: './ads-header.component.html',
  styleUrls: ['./ads-header.component.css']
})
export class AdsHeaderComponent implements OnInit {

  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  

  subscriptions:Subscription[]=[];
  adsId: any;
  adsNombre: any;
  adsText: any;
  adsDate_inicio: any;
  adsDate_final: any;
  adsCreated_at: any;
  adsLast_modified: any;
  



  constructor(
    private ApiService: ApiService,
  ) { }

  ngOnInit() {
    //Reloj
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('01/01/' + (this.now.getFullYear() + 1) +' 00:00');
      this.showDate();
    });
    //Reloj


    this.getTextAds();
  }

      //Reloj
        showDate(){
          let distance = this.end - this.now;
          this.day = Math.floor(distance / this._day);
          this.hours = Math.floor((distance % this._day) / this._hour);
          this.minutes = Math.floor((distance % this._hour) / this._minute);
          this.seconds = Math.floor((distance % this._minute) / this._second);
        }
      //Reloj


  //API - ANUNCIOS//
  getTextAds(){
    // console.log(id)
    //console.log(t his.id);
    this.subscriptions.push(
      this.ApiService
      .getADS() 
        .subscribe((r: any) => {
          this.adsId = r.datos.id
          this.adsNombre =r.datos.nombre
          this.adsText =r.datos.text
          this.adsDate_inicio =r.datos.date_inicio
          this.adsDate_final =r.datos.date_final
          this.adsCreated_at=r.datos.created_at
          this.adsLast_modified =r.datos.last_modified
          //console.log("datos.text",r.datos.text)
        
        }
      ));

  }
}
