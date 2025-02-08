import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeredBarChartComponent } from './layered-bar-chart.component';

describe('LayeredBarChartComponent', () => {
  let component: LayeredBarChartComponent;
  let fixture: ComponentFixture<LayeredBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayeredBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayeredBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
