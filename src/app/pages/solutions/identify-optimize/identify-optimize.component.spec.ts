import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyOptimizeComponent } from './identify-optimize.component';

describe('IdentifyOptimizeComponent', () => {
  let component: IdentifyOptimizeComponent;
  let fixture: ComponentFixture<IdentifyOptimizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentifyOptimizeComponent]
    });
    fixture = TestBed.createComponent(IdentifyOptimizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
