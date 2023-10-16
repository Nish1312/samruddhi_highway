import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStopComponent } from './manage-stop.component';

describe('ManageStopComponent', () => {
  let component: ManageStopComponent;
  let fixture: ComponentFixture<ManageStopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageStopComponent]
    });
    fixture = TestBed.createComponent(ManageStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
