import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHighlightComponent } from './card-highlight.component';

describe('CardHighlightComponent', () => {
  let component: CardHighlightComponent;
  let fixture: ComponentFixture<CardHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHighlightComponent]
    });
    fixture = TestBed.createComponent(CardHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
