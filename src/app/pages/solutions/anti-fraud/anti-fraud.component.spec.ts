import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiFraudComponent } from './anti-fraud.component';

describe('AntiFraudComponent', () => {
  let component: AntiFraudComponent;
  let fixture: ComponentFixture<AntiFraudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiFraudComponent]
    });
    fixture = TestBed.createComponent(AntiFraudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
