import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTwoComponent } from './service-two.component';

describe('ServiceTwoComponent', () => {
  let component: ServiceTwoComponent;
  let fixture: ComponentFixture<ServiceTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceTwoComponent]
    });
    fixture = TestBed.createComponent(ServiceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
