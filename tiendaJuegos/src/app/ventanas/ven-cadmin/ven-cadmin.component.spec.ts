import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenCadminComponent } from './ven-cadmin.component';

describe('VenCadminComponent', () => {
  let component: VenCadminComponent;
  let fixture: ComponentFixture<VenCadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenCadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenCadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
