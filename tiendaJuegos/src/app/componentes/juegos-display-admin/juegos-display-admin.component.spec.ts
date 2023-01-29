import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosDisplayAdminComponent } from './juegos-display-admin.component';

describe('JuegosDisplayAdminComponent', () => {
  let component: JuegosDisplayAdminComponent;
  let fixture: ComponentFixture<JuegosDisplayAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosDisplayAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
