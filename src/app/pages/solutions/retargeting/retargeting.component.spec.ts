import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetargetingComponent } from './retargeting.component';

describe('RetargetingComponent', () => {
  let component: RetargetingComponent;
  let fixture: ComponentFixture<RetargetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetargetingComponent]
    });
    fixture = TestBed.createComponent(RetargetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
