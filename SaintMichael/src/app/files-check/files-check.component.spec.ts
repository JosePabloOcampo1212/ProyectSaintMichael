import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesCheckComponent } from './files-check.component';

describe('FilesCheckComponent', () => {
  let component: FilesCheckComponent;
  let fixture: ComponentFixture<FilesCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
