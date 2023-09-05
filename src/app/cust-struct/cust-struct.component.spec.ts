import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustStructComponent } from './cust-struct.component';

describe('CustStructComponent', () => {
  let component: CustStructComponent;
  let fixture: ComponentFixture<CustStructComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustStructComponent]
    });
    fixture = TestBed.createComponent(CustStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
