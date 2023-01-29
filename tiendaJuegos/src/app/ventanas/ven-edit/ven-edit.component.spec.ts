import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenEditComponent } from './ven-edit.component';

describe('VenEditComponent', () => {
  let component: VenEditComponent;
  let fixture: ComponentFixture<VenEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
