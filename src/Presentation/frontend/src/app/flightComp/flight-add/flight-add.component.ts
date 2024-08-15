/*Bu bileşen, yeni bir uçuş eklemek için bir form sunar 
ve form gönderildiğinde uçuşu veritabanına kaydeder.*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';//bileşenler arasında gezinmek için kullanılır.
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';



@Component({
  selector: 'app-flight-add',//Bu bileşenin HTML'de kullanılacak adı.
  templateUrl: './flight-add.component.html',//Bileşenle ilişkili HTML şablonunun yolu.
  styleUrls: ['./flight-add.component.css']//Bileşenle ilişkili CSS dosyasının yolu.
})
export class FlightAddComponent {
  flight: Flight = {
    id: 0,
    departure: '',
    arrival: '',
    date: '',
    time: '',
    capacity: 0,
    price: 0
  };

  constructor(private flightService: FlightService, private router: Router) { }
  //Bileşenin yapıcı metodu, FlightService ve Router bağımlılıklarını enjekte eder.

  onSubmit() {//Form gönderildiğinde çağrılan metot
    this.flightService.createFlight(this.flight).subscribe(() => {
      this.router.navigate(['/']);
      //uçuşu oluşturur ve ana sayfaya yönlendirir.
    });
  }
}
