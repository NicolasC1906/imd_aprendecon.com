import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaceptComponent } from './payacept.component';

describe('PayaceptComponent', () => {
  let component: PayaceptComponent;
  let fixture: ComponentFixture<PayaceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayaceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayaceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
