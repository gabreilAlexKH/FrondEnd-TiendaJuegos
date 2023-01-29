import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenAdminComponent } from './ven-admin.component';

describe('VenAdminComponent', () => {
  let component: VenAdminComponent;
  let fixture: ComponentFixture<VenAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
