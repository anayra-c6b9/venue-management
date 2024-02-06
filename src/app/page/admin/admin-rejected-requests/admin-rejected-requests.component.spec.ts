import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRejectedRequestsComponent } from './admin-rejected-requests.component';

describe('AdminRejectedRequestsComponent', () => {
  let component: AdminRejectedRequestsComponent;
  let fixture: ComponentFixture<AdminRejectedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminRejectedRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRejectedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
