import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoCardAdminComponent } from './juego-card-admin.component';

describe('JuegoCardAdminComponent', () => {
  let component: JuegoCardAdminComponent;
  let fixture: ComponentFixture<JuegoCardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoCardAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
