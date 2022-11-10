import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  nombre = new FormControl('', [Validators.required]);
  motivo = new FormControl('', [Validators.required]);
  mensaje = new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }
  

  constructor() { }
  

  ngOnInit(): void {
  }

  

}
