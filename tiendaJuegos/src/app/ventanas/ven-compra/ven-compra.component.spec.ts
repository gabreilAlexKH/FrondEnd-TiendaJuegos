import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenCompraComponent } from './ven-compra.component';

describe('VenCompraComponent', () => {
  let component: VenCompraComponent;
  let fixture: ComponentFixture<VenCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
