import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPendingInvoicesComponent } from './widget-pending-invoices.component';

describe('WidgetPendingInvoicesComponent', () => {
  let component: WidgetPendingInvoicesComponent;
  let fixture: ComponentFixture<WidgetPendingInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPendingInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetPendingInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
