import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject1Component } from './subject1.component';

describe('Subject1Component', () => {
  let component: Subject1Component;
  let fixture: ComponentFixture<Subject1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subject1Component]
    });
    fixture = TestBed.createComponent(Subject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
