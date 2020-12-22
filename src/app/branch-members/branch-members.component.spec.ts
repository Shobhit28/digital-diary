import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchMembersComponent } from './branch-members.component';

describe('BranchMembersComponent', () => {
  let component: BranchMembersComponent;
  let fixture: ComponentFixture<BranchMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
