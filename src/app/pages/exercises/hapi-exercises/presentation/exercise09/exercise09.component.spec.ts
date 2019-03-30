import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise09Component } from './exercise09.component';

describe('Exercise09Component', () => {
  let component: Exercise09Component;
  let fixture: ComponentFixture<Exercise09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
