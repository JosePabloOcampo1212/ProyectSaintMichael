import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAmdmiComponent } from './nav-amdmi.component';

describe('NavAmdmiComponent', () => {
  let component: NavAmdmiComponent;
  let fixture: ComponentFixture<NavAmdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAmdmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAmdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
