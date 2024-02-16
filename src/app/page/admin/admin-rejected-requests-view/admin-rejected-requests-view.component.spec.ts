import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRejectedRequestsViewComponent } from './admin-rejected-requests-view.component';

describe('AdminRejectedRequestsViewComponent', () => {
  let component: AdminRejectedRequestsViewComponent;
  let fixture: ComponentFixture<AdminRejectedRequestsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminRejectedRequestsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRejectedRequestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
