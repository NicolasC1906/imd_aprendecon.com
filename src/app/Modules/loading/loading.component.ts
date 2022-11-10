import { Component, OnInit } from '@angular/core';
import { SpinnerServicesService } from 'src/services/spinner.services.service';

@Component({
  selector: 'app-loading',
  template: `
  <div *ngIf="isLoading | async" class="preloader">
  <div class="container-fluid">
    <div class="spinner">
      <span class="ball-1"></span>
      <span class="ball-2"></span>
      <span class="ball-3"></span>
      <span class="ball-4"></span>
    </div>
  </div>
</div>`,
  styleUrls: ['./loading.component.scss'],
  providers: [LoadingComponent]
})
export class LoadingComponent implements OnInit {

  isLoading = this.spinnerSvc.isLoading$;

  constructor(
    private spinnerSvc: SpinnerServicesService,
  ) { }

  ngOnInit(): void {
  }

}
