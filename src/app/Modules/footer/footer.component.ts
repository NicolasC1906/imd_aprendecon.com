import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscriptions:Subscription[]=[];
  anio: number = new Date().getFullYear();
  
  constructor(private ApiService: ApiService,) { }
  

  ngOnInit() {
  }

  
}
