import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {
  flight: Flight | undefined;

  constructor( //Dependency Injection
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Bileşen başlatıldığında çağrılan metot, uçuş bilgilerini alır.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlightById(id).subscribe((flight: Flight) => {
      this.flight = flight;
    });
  }

  isAdmin(): boolean { //kullanıcının rol kontrolü
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'Admin';
  }

  buyFlight(): void { //Uçuş satın alma işlemini gerçekleştirir.
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && this.flight) {
      this.flightService.buyFlight(user.id, this.flight.id).subscribe(() => {
        alert('Flight purchased successfully!');
        this.router.navigate(['/']);
      });
    }
  }

  cancel(): void { //Kullanıcıyı uçuş filtreleme sayfasına yönlendirir.
    this.router.navigate(['/filter']);
  }
}
