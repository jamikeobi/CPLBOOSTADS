import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetizeCounterComponent } from './monetize-counter.component';

describe('MonetizeCounterComponent', () => {
  let component: MonetizeCounterComponent;
  let fixture: ComponentFixture<MonetizeCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonetizeCounterComponent]
    });
    fixture = TestBed.createComponent(MonetizeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
