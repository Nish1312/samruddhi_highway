import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChalanComponent } from './manage-chalan.component';

describe('ManageChalanComponent', () => {
  let component: ManageChalanComponent;
  let fixture: ComponentFixture<ManageChalanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageChalanComponent]
    });
    fixture = TestBed.createComponent(ManageChalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
