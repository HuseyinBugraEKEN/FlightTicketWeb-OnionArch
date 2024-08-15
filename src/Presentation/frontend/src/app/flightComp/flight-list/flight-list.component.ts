import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: any[] = [];

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.getFlights().subscribe({
      next: (data) => {
        this.flights = data;
        console.log('Flights loaded:', this.flights);
      },
      error: (error) => {
        console.error('Error loading flights:', error);
      }
    });
  }

  deleteFlight(id: number): void {
    this.flightService.deleteFlight(id).subscribe({
      next: () => {
        this.loadFlights();
        alert('Deleted..');
      },
      error: (error) => {
        console.error('Error deleting flight:', error);
      }
    });
  }

  updateFlight(id: number): void {
    this.router.navigate(['/update', id]);
  }

  viewUsersByFlight(id: number): void {
    this.flightService.getUsersByFlightId(id).subscribe({
      next: (emails) => {
        if (emails.length === 0) {
          alert('No users have purchased this flight.');
        } else {
          alert('Users who bought this flight: \n' + emails.join('\n'));
        }
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
  

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'Admin';
  }
}
