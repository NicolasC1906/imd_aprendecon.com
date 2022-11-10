import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { SpinnerServicesService } from "src/services/spinner.services.service";
 
@Injectable()

export class SpinnerInterseptor implements HttpInterceptor{
    constructor(private spinnerSvc: SpinnerServicesService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinnerSvc.show();
        return next.handle(req).pipe(
            finalize(() => 
                this.spinnerSvc.hide( )
            )
        )
        
    }
}