import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenClienteComponent } from './ven-cliente.component';

describe('VenClienteComponent', () => {
  let component: VenClienteComponent;
  let fixture: ComponentFixture<VenClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
