import { Component, OnInit, } from '@angular/core';
import {  ReactiveFormsModule ,FormControl, FormGroupDirective, FormBuilder, NgForm,Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ApiService } from '../../../../services/api.service';
import { Subscription, timer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { JavascriptService } from 'src/app/javascript.service';
import { ActivatedRoute,Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentPayComponent } from '../../../pages/payment/billing/dialog-content-pay/dialog-content-pay.component';
import { ReCaptchaV3Service } from 'ngx-captcha';

 interface Meses {
  value: string;
  viewValue: string;
}

interface Anios {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
minLength(arg0: number): string {
throw new Error('Method not implemented.');
}
  
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
 
  nombre = new FormControl('', [Validators.required, Validators.minLength(3)]);
  numerotarjeta = new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(28)]);
  mestarjeta = new FormControl('', [Validators.required]);
  aniotarjeta = new FormControl('', [Validators.required]);
  ccvtarjeta = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]);
  recaptcha =   new FormControl('', [Validators.required]);

  siteKey:string = "6LcVWRojAAAAAFkUZoxrjC27qpI7kawmuwpxvdXg";
  
  public payForm = new FormGroup({
    name: this.nombre,
    numerotarjeta: this.numerotarjeta,
    lastName: this.numerotarjeta,
    mestarjeta: this.mestarjeta,
    aniotarjeta: this.aniotarjeta,
    ccvtarjeta: this.ccvtarjeta,
    recaptcha: this.recaptcha,
  });

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

   mes: Meses[] = [
    {viewValue: 'Enero', value: '01'},
    {viewValue: 'Febrero', value: '02'},
    {viewValue: 'Marzo', value: '03'},
    {viewValue: 'Abril', value: '04'},
    {viewValue: 'Mayo', value: '05'},
    {viewValue: 'Junio', value: '06'},
    {viewValue: 'Julio', value: '08'},
    {viewValue: 'Agosto', value: '09'},
    {viewValue: 'Septiembre', value: '10'},
    {viewValue: 'Noviembre', value: '11'},
    {viewValue: 'Diciembre', value: '12'},
  ];
  selectedMes = this.mes[0].value;

  selectCar(event: Event) {
    this.selectedMes = (event.target as HTMLSelectElement).value;
  }

  annio: Anios[] = [
    {value: '22', viewValue: '2022'},
    {value: '23', viewValue: '2023'},
    {value: '24', viewValue: '2024'},
    {value: '25', viewValue: '2025'},
    {value: '26', viewValue: '2026'},
    {value: '27', viewValue: '2027'},
    {value: '28', viewValue: '2028'},
    {value: '29', viewValue: '2029'},
  ];
  selectedAnios = this.annio[0].value;

  selectAnios(event: Event) {
    this.selectedMes = (event.target as HTMLSelectElement).value;
  } 
 

  

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentPayComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  subscriptions:Subscription[]=[];
paymentForm: any;
  constructor(
    private ApiService: ApiService,
    private cookies:CookieService,
    private _formBuilder: FormBuilder,
    private Javascript:JavascriptService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private reCaptchaV3Service: ReCaptchaV3Service
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
  
  onSubmit(): void{
console.log('Form')
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
   // console.log("Esto es card 1",user);
      this.ApiService.postCard(user).subscribe( data => {
        console.log("Esto es card 2",data);
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
