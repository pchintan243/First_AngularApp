import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleSearchComponent } from './lifecycle-search.component';

describe('LifecycleSearchComponent', () => {
  let component: LifecycleSearchComponent;
  let fixture: ComponentFixture<LifecycleSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleSearchComponent]
    });
    fixture = TestBed.createComponent(LifecycleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
