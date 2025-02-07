import { ComponentFixture, TestBed } from '@angular/core/testing';

import { barGraphComponent } from './barGraph.component';

describe('barGraphComponent', () => {
  let component: barGraphComponent;
  let fixture: ComponentFixture<barGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [barGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(barGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
