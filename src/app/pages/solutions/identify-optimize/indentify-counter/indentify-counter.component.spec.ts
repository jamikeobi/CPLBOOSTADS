import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentifyCounterComponent } from './indentify-counter.component';

describe('IndentifyCounterComponent', () => {
  let component: IndentifyCounterComponent;
  let fixture: ComponentFixture<IndentifyCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndentifyCounterComponent]
    });
    fixture = TestBed.createComponent(IndentifyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
