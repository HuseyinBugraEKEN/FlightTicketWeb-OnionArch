import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent {
  filter = { // Filtreleme kriterlerini tutan nesne.
    departure: '',
    arrival: '',
    date: null,
    passengers: 0
  };
  flights: any[] = []; // Filtreleme sonucunda bulunan uçuşları tutan dizi.
  submitted = false; // Formun gönderilip gönderilmediğini belirten flag.

  constructor(private flightService: FlightService, private router: Router) { }
  //bağımlılıkları enjekte eder (FlightService, router).

  ngOnInit(): void {
    //Bileşen başlatıldığında kullanıcı rolü öğrenmek için çağırılır.
    if (this.isAdmin()) {
      this.router.navigate(['/']);
    }
  }

  isAdmin(): boolean { // Admin check
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'Admin';
  }

  onSubmit() {
//Form gönderildiğinde, uçuşları filtrelemek ve sonuçları güncellemek için çağırılan metod
    this.submitted = true;
    this.flightService.filterFlights(this.filter).subscribe((flights: any[]) => {
      this.flights = flights;
    });
  }

  selectFlight(flight: any) { // Belirli bir uçuşu seçer ve uçuş detay sayfasına yönlendirir.
    this.router.navigate(['/flight-detail', flight.id]);
  }
}
