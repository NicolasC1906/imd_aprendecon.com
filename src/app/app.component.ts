import { Component,OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aprendecon.com';
  

	
  constructor( private ApiService: ApiService,){
 
    }
  ngOnInit(): void {

    

  }
  
    
}




