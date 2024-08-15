import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { FlightUpdateComponent } from './flight-update/flight-update.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { FlightMyComponent } from './flight-my/flight-my.component';

@NgModule({
  declarations: [
    FlightListComponent,
    FlightAddComponent,
    FlightUpdateComponent,
    FlightFilterComponent,
    FlightDetailComponent,
    FlightMyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FlightListComponent,
    FlightAddComponent,
    FlightUpdateComponent,
    FlightFilterComponent,
    FlightDetailComponent,
    FlightMyComponent
  ]
})
export class FlightModule { }
