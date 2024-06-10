import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRecentCustomersComponent } from './widget-recent-customers.component';

describe('WidgetRecentCustomersComponent', () => {
  let component: WidgetRecentCustomersComponent;
  let fixture: ComponentFixture<WidgetRecentCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetRecentCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetRecentCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
