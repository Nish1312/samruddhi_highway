import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExploreComponent } from './manage-explore.component';

describe('ManageExploreComponent', () => {
  let component: ManageExploreComponent;
  let fixture: ComponentFixture<ManageExploreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageExploreComponent]
    });
    fixture = TestBed.createComponent(ManageExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
