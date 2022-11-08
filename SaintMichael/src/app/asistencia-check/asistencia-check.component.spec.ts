import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaCheckComponent } from './asistencia-check.component';

describe('AsistenciaCheckComponent', () => {
  let component: AsistenciaCheckComponent;
  let fixture: ComponentFixture<AsistenciaCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciaCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistenciaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
