import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurseHomeComponent } from './curse-home.component';

describe('CurseHomeComponent', () => {
  let component: CurseHomeComponent;
  let fixture: ComponentFixture<CurseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurseHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
