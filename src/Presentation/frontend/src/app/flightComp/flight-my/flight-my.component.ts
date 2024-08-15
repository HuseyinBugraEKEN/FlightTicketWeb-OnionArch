import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { UserFlightDto } from '../../models/flight.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-my',
  templateUrl: './flight-my.component.html',
  styleUrls: ['./flight-my.component.css']
})
export class FlightMyComponent implements OnInit {
  flights: UserFlightDto[] = []; //satın alınan uçuşları tutan dizi

  constructor(private flightService: FlightService, private router: Router) { }
  //bağımlılıkları enjekte eder

  ngOnInit(): void { // başlangıçta admin check yapıp uçuşları yükler.
    if (this.isAdmin()) {
      this.router.navigate(['/']);
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.id) {
      this.flightService.getUserFlights(user.id).subscribe({
        next: (flights: UserFlightDto[]) => {
          this.flights = flights;
        },
        error: (error) => {
          console.error('Failed to load user flights', error);
        }
      });
    } else {
      console.error('User ID is not defined');
    }
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'Admin';
  }

  cancelFlight(flightId: number): void { // uçuş iptali, iptal sonrası güncelleme
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.id) {
      this.flightService.cancelFlight(user.id, flightId).subscribe({
        next: () => {
          this.flights = this.flights.filter(f => f.flightId !== flightId);
        },
        error: (error) => {
          console.error('Failed to cancel flight', error);
        }
      });
      alert('Flight cancelled successfully');
    } else {
      console.error('User ID is not defined');
    }
  }
}
