import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamiendoDatosComponent } from './tratamiendo-datos.component';

describe('TratamiendoDatosComponent', () => {
  let component: TratamiendoDatosComponent;
  let fixture: ComponentFixture<TratamiendoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamiendoDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamiendoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
