import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenInfoJuegoComponent } from './ven-info-juego.component';

describe('VenInfoJuegoComponent', () => {
  let component: VenInfoJuegoComponent;
  let fixture: ComponentFixture<VenInfoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenInfoJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenInfoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
