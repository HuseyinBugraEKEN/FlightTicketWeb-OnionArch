import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-update',
  templateUrl: './flight-update.component.html',
  styleUrls: ['./flight-update.component.css']
})
export class FlightUpdateComponent implements OnInit {
  flight = {
    id: 0,
    departure: '',
    arrival: '',
    date: '',
    time: '',
    capacity: 0,
    price: 0
  };

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router
  ) { } //bağımlılıkları enjekte eder.

  ngOnInit(): void { //bileşen başlatılınca uçuş bilgilerini yükler.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlightById(id).subscribe((flight: Flight) => {
      this.flight = flight;
    });
  }

  cancel(): void { //Kullanıcıyı uçuş filtreleme sayfasına yönlendirir.
    this.router.navigate(['/']);
  }
  
  onSubmit(): void { // değişiklik sonrası güncelleme ve ana sayfaya yönlendirme.
    this.flightService.updateFlight(this.flight.id, this.flight).subscribe(() => {
      this.router.navigate(['/']);
      alert('Flight purchased successfully!');
    });
  }
}
