import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPurchaseHistoryComponent } from './widget-purchase-history.component';

describe('WidgetPurchaseHistoryComponent', () => {
  let component: WidgetPurchaseHistoryComponent;
  let fixture: ComponentFixture<WidgetPurchaseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPurchaseHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
