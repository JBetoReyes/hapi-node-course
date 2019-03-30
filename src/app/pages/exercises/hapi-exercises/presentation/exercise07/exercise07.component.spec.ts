import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise07Component } from './exercise07.component';

describe('Exercise07Component', () => {
  let component: Exercise07Component;
  let fixture: ComponentFixture<Exercise07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
