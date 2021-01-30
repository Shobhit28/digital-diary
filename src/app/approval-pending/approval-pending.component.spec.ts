import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberapprovalComponent } from './approval-pending.component';

describe('MemberapprovalComponent', () => {
  let component: MemberapprovalComponent;
  let fixture: ComponentFixture<MemberapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
