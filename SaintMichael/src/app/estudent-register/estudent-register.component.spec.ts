import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudentRegisterComponent } from './estudent-register.component';

describe('EstudentRegisterComponent', () => {
  let component: EstudentRegisterComponent;
  let fixture: ComponentFixture<EstudentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
