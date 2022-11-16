import { Component, OnInit, } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Subscription, timer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { JavascriptService } from 'src/app/javascript.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  
  date: number = new Date().getDate();
  mount: number = new Date().getMonth();
  anio: number = new Date().getFullYear();

  hour: number = new Date().getHours();
  minute: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();

  
  isLinear = false;
  checked = false;
  tabLoadTimes: Date[] = [];
  

  correo: any;
  contrasena: any;
  name: any;
  surname: any;
  cell: any;
  textoDeInput: any;

  username: any;
  apellido: any;
  idUser: any;
  nombreUser: any;
  correoUser: any;
 
  nombre = new FormControl('', [Validators.required]);
  numerotarjeta = new FormControl('', [Validators.required, Validators.minLength(16)]);
  mestarjeta = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]);
  aniotarjeta = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]);
  ccvtarjeta = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
  

  // form card

  card_number:any;
  holder_name: any;
  expiration_year:any;
  expiration_month:any;
  cvv2:any;

  
// form card

  // info suscripción
   id:any;
   plan:any = [];
   data:any = [];


// nombre tarjeta
  getErrorMessagenombre() {
    if (this.nombre.hasError('required')) {
      return 'Ingrese nombre titular';
    }

    return this.nombre.hasError('nombre') ? 'Ingrese nombre titular' : '';
  }
// nombre tarjeta

// numero tarjeta
  getErrorMessagenumerotarjeta() {
    if (this.numerotarjeta.hasError('required')) {
      return 'Ingrese minimo 16 digitos';
    }

    return this.numerotarjeta.hasError('numerotarjeta') ? 'Ingrese minimo 16 digitos' : '';
  }

// numero tarjeta

// mes tarjeta

  getErrorMessagenMesTarjeta() {
    if (this.mestarjeta.hasError('required')) {
      return 'Ingrese minimo 2 digitos';
    }

    return this.mestarjeta.hasError('mestarjeta') ? 'Ingrese minimo 2 digitos' : '';
  }

  // mes tarjeta

  // Año tarjeta
  getErrorMessageAnioarjeta() {
    if (this.aniotarjeta.hasError('required')) {
      return 'Ingrese minimo 2 digitos';
    }

    return this.aniotarjeta.hasError('aniotarjeta') ? 'Ingrese minimo 2 digitos' : '';
  }

  // Año tarjeta

// CCV tarjeta
  getErrorMessageCcvTarjeta() {
    if (this.ccvtarjeta.hasError('required')) {
      return 'Ingrese minimo 3 digitos';
    }

    return this.ccvtarjeta.hasError('ccvtarjeta') ? 'Ingrese minimo 3 digitos' : '';
  }

// CCV tarjeta


  policy = this._formBuilder.group({
    TerminosCondiciones : false,
    TratamiendoDatos: false,
    PolíticasPrivacidad: false,
  });
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  

  subscriptions:Subscription[]=[];
paymentForm: any;
  constructor(
    private ApiService: ApiService,
    private cookies:CookieService,
    private _formBuilder: FormBuilder,
    private Javascript:JavascriptService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
  ) { 
    Javascript.Carga(["script/credit"]),
    this.id= this.ActivatedRoute.snapshot.paramMap.get('id_suscripcion')
    //console.log("prueba ID",this.id)
  }
  

  ngOnInit(): void {
    this.getInfo()
    this. getPrice()
    this.getCustomer()
  }
  
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
  
  getInfo(){
    // console.log("entro o no")
    this.idUser = localStorage.getItem("id")
    this.subscriptions.push(
        this.ApiService.getUsersById(this.idUser)
        .subscribe((r: any) => {
          //console.log("🚀 ~ file: navbar.component.ts ~ line 108 ~ NavbarComponent ~ .subscribe ~ r", r)
           this.username = r.username,
           this.nombreUser = r.nombre
           this.apellido = r.apellido
           this.correoUser= r.correo
        }

        ));
      }
     
   getCustomer(){
    this.idUser = localStorage.getItem("id")
    this.subscriptions.push(
      this.ApiService.getPayCustomer(this.idUser)
      .subscribe((r: any)=> {
       // console.log(r)
        this.cookies.set("CUST_API", r.id_customer)
      }) 
    )
   }
   
   postCard(){
    const user = {
      id_user: this.idUser,
      card_number:this.card_number,
      holder_name:this.holder_name,
      expiration_year:(this.expiration_year).toString(),
      expiration_month:(this.expiration_month).toString(),
      cvv2: this.cvv2.toString()
    }
    //console.log("Esto es card 1",user);
     this.ApiService.postCard(user).subscribe( data => {
       //console.log("Esto es card 2",data);
       this.cookies.set("CAR_API", data.id_data)
       const pay = {
        id_user: this.idUser,
        id_suscripcion: this.id,
        id_card:data.id_data,
        id_customer: this.cookies.get("CUST_API")
      }
       this.ApiService.postPay(pay).subscribe( resp => {
        console.log("Esto es pay", resp);
       })
     })
   }


      getPrice(){
        // console.log(id)
        //console.log(t his.id);
        this.subscriptions.push(
          this.ApiService
          .getPrice()  
            .subscribe((r: any) => {
              this.data = r.data

              if( this.data[0].id_suscripcion === this.id){
                
                this.plan = {
                     "id":this.data[0].id, 
                     "id_suscripcion":this.data[0].id_suscripcion, 
                     "tipo":this.data[0].tipo,
                     "nombre":this.data[0].nombre,
                     "precio":this.data[0].precio
                   }
                  // console.log("soy prueba correcta 0", this.plan)
              } else if( this.data[1].id_suscripcion === this.id){
                
                this.plan = {
                     "id":this.data[1].id, 
                     "id_suscripcion":this.data[1].id_suscripcion, 
                     "tipo":this.data[1].tipo,
                     "nombre":this.data[1].nombre,
                     "precio":this.data[1].precio
                   }
                   //console.log("soy prueba correcta 1", this.plan)
              } else if( this.data[2].id_suscripcion === this.id){
                
                this.plan = {
                     "id":this.data[2].id, 
                     "id_suscripcion":this.data[2].id_suscripcion, 
                     "tipo":this.data[2].tipo,
                     "nombre":this.data[2].nombre,
                     "precio":this.data[2].precio
                   }
                  // console.log("soy prueba correcta 2", this.plan)
              }else if( this.data[3].id_suscripcion === this.id){
                
                this.plan = {
                     "id":this.data[3].id, 
                     "id_suscripcion":this.data[3].id_suscripcion, 
                     "tipo":this.data[3].tipo,
                     "nombre":this.data[3].nombre,
                     "precio":this.data[3].precio
                   }
                  //console.log("soy prueba correcta 3", this.plan)
              } else if( this.data[4].id_suscripcion === this.id){
                
                this.plan = {
                     "id":this.data[4].id, 
                     "id_suscripcion":this.data[4].id_suscripcion, 
                     "tipo":this.data[4].tipo,
                     "nombre":this.data[4].nombre,
                     "precio":this.data[4].precio
                   }
                   //console.log("soy prueba correcta 4", this.plan)
              }else if( this.data[5].id_suscripcion === this.id){
                
                this.plan = {
                     "id":this.data[5].id, 
                     "id_suscripcion":this.data[5].id_suscripcion, 
                     "tipo":this.data[5].tipo,
                     "nombre":this.data[5].nombre,
                     "precio":this.data[5].precio
                   }
                   //console.log("soy prueba correcta 5", this.plan)
              }else{
                console.log(" prueba inorrecta")
              }
            
            }
            
          ));
        }   




}
