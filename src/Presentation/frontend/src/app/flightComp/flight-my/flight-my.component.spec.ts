import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightMyComponent } from './flight-my.component';

describe('FlightMyComponent', () => {
  let component: FlightMyComponent;
  let fixture: ComponentFixture<FlightMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightMyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
