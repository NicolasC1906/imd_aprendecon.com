import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private auth : AuthService,
    private router: Router 
    ){}

  canActivate() {
    if(this.auth.IsLoggedIn()){
      return true;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      width: 600,
      padding: '3em',
      color: '#716add',
      text: 'Para continuar, te invitamos a Iniciar Sesión!',
      showConfirmButton: false,
      showCloseButton: true,
      footer: '<a href="registro">No tienes una cuenta? Registrate Gratis.</a>',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
    this.router.navigate(['login']);
    return false;
  }
  
}
