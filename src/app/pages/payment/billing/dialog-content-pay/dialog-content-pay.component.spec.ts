import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentPayComponent } from './dialog-content-pay.component';

describe('DialogContentPayComponent', () => {
  let component: DialogContentPayComponent;
  let fixture: ComponentFixture<DialogContentPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
