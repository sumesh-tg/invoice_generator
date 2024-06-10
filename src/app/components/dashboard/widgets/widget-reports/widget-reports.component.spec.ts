import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetReportsComponent } from './widget-reports.component';

describe('WidgetReportsComponent', () => {
  let component: WidgetReportsComponent;
  let fixture: ComponentFixture<WidgetReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
