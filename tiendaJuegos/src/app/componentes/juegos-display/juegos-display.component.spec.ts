import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosDisplayComponent } from './juegos-display.component';

describe('JuegosDisplayComponent', () => {
  let component: JuegosDisplayComponent;
  let fixture: ComponentFixture<JuegosDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
