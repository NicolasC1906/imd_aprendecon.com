import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookies:CookieService,
  ) { }

  IsLoggedIn(){
    return !!this.cookies.get("token");
   
  }
  

}
