import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeclinedComponent } from './paydeclined.component';

describe('PaydeclinedComponent', () => {
  let component: PaydeclinedComponent;
  let fixture: ComponentFixture<PaydeclinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaydeclinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaydeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
