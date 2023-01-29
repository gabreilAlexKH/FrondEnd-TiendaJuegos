import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenVideojuegosCompradosComponent } from './ven-videojuegos-comprados.component';

describe('VenVideojuegosCompradosComponent', () => {
  let component: VenVideojuegosCompradosComponent;
  let fixture: ComponentFixture<VenVideojuegosCompradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenVideojuegosCompradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenVideojuegosCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
