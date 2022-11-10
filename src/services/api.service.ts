import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { UserModel } from '../../app/models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AbstractControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API GENERAL

  private ApiAprendecon: string = "https://elearning.apiimd.com/api/";

constructor(private http:HttpClient) { }

//METODOS GET - CON HEADERS //

//METODO GET - ANUNCIOS - Start//

    getADS(){

      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(`${this.ApiAprendecon}anunciostextactual`,{
        headers: header
      });

    }

//METODO GET - ANUNCIOS - End//

//METODO GET - BANNERS - Start//

      getBANNERS(){

        let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')

        return this.http.get(`${this.ApiAprendecon}bannershome`,{
          headers: header
        });

      }

//METODO GET - BANNERS - End//
//METODO GET - MOODLE CURSOS RECIENTES - Start//

getRecientCourse(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}moodle/recientes_cursos`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//
//METODO GET - MOODLE CURSOS CATEGORIAS - Start//

getCategoriasCourse(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}moodle/categorias`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS CATEGORIAS  - End//

//METODO GET - MOODLE CURSOS CATEGORIAS - Start//

    getTotalCourse(){

      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(`${this.ApiAprendecon}moodle/all_cursos`,{
        headers: header
      });

    }

//METODO GET - MOODLE CURSOS CATEGORIAS  - End//


//METODO POST - AUTH  -  Start//
loginAuth(user: any): Observable<any> {
  // console.log("🚀 ~ file: api.service.ts ~ line 97 ~ ApiService ~ loginAuth ~ user", user)
  return this.http.post("https://elearning.apiimd.com/api/login", user);
  
}

registrer(user: any): Observable<any> {
  // console.log("🚀 ~ file: api.service.ts ~ line 97 ~ ApiService ~ loginAuth ~ user", user)
  return this.http.post("https://elearning.apiimd.com/api/crearuser", user);
  
}

restableceUser(user: any): Observable<any> {
  // console.log("🚀 ~ file: api.service.ts ~ line 97 ~ ApiService ~ loginAuth ~ user", user)
  return this.http.post("https://elearning.apiimd.com/api/recuperar", user);
  
}
//METODO POST - AUTH  -  End//

//METODO GET - USERS - Start//

getUsers(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}usuarios/`,{
    headers: header
  });

}

//METODO GET - USERS  - End//

//METODO GET - USERS BY ID - Start//

getUsersById(id: any){
  

  return this.http.get(`${this.ApiAprendecon}usuarios/${id}`);
}

//METODO GET - USERS BY ID - End//

//METODO GET - MOODLE CURSOS RECIENTES - Start//

getImgCursos(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}inicio/cursos`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//

//METODO GET - MOODLE CURSOS RECIENTES - Start//

getImgProyectos(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}inicio/proyectos`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//

//METODO GET - MOODLE CURSOS RECIENTES - Start//

getImgLives(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}inicio/lives`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//

//METODO GET - MOODLE CURSOS RECIENTES - Start//

getImgReels(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}inicio/reels`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//

//METODO GET - MOODLE CURSOS RECIENTES - Start//

getImgLaboratorios(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}inicio/laboratorios`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//



//METODO GET - MOODLE CURSOS RECIENTES - Start//

getPrice(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}suscripciones/getall`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//

//METODO GET - MOODLE CURSOS RECIENTES - Start//

getFaqMatriculas(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}faq/matriculas/all`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//

//METODO GET - MOODLE CURSOS RECIENTES - Start//

getCentralInfo(){

  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  return this.http.get(`${this.ApiAprendecon}central/buttons`,{
    headers: header
  });

}

//METODO GET - MOODLE CURSOS RECIENTES  - End//

}