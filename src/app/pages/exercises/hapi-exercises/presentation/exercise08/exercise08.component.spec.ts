import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise08Component } from './exercise08.component';

describe('Exercise08Component', () => {
  let component: Exercise08Component;
  let fixture: ComponentFixture<Exercise08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
