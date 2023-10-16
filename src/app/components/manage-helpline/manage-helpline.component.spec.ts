import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHelplineComponent } from './manage-helpline.component';

describe('ManageHelplineComponent', () => {
  let component: ManageHelplineComponent;
  let fixture: ComponentFixture<ManageHelplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageHelplineComponent]
    });
    fixture = TestBed.createComponent(ManageHelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
