import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingapprovalsdashboardComponent } from './pendingapprovalsdashboard.component';

describe('PendingapprovalsdashboardComponent', () => {
  let component: PendingapprovalsdashboardComponent;
  let fixture: ComponentFixture<PendingapprovalsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingapprovalsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingapprovalsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
