import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcquisitionComponent } from './user-acquisition.component';

describe('UserAcquisitionComponent', () => {
  let component: UserAcquisitionComponent;
  let fixture: ComponentFixture<UserAcquisitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAcquisitionComponent]
    });
    fixture = TestBed.createComponent(UserAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
