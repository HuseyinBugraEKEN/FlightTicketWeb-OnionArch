/*
uçuş ve kimlik doğrulama işlemleri ile ilgili API isteklerini yönetir. 
Her iki hizmet de HTTP isteklerini HttpClient kullanarak gerçekleştirir ve 
API'den veri alır veya gönderir.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//HTTP istekleri yapmak için kullanılır.
import { Observable } from 'rxjs';//RxJS ile birlikte gelen, asenkron veri akışlarını temsil eden bir yapı.
import { Flight, UserFlightDto } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
  //Bu hizmetin kök enjeksiyon sağlayıcısında kullanılabilir olduğunu belirtir.
})
export class FlightService {
  private baseUrl = 'http://localhost:5057/api/flights';
  //Kimlik doğrulama API'sinin temel URL'si.

  constructor(private http: HttpClient) { }
  //HttpClient bağımlılığını enjekte eder.

  getFlights(): Observable<Flight[]> {
    //Mevcut uçuşları listelemek için kullanılan metot.
    return this.http.get<Flight[]>(`${this.baseUrl}`);
  }

  getFlightById(id: number): Observable<Flight> {
    //Belirli bir uçuşun detaylarını almak için kullanılan metot.
    return this.http.get<Flight>(`${this.baseUrl}/${id}`);
  }

  createFlight(flight: Flight): Observable<Flight> {
    //Yeni bir uçuş oluşturmak için kullanılan metot.
    return this.http.post<Flight>(`${this.baseUrl}`, flight);
  }

  updateFlight(id: number, flight: Flight): Observable<void> {
    //Mevcut bir uçuşu güncellemek için kullanılan metot.
    return this.http.put<void>(`${this.baseUrl}/${id}`, flight);
  }

  deleteFlight(id: number): Observable<void> {
    //Belirli bir uçuşu silmek için kullanılan metot.
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  filterFlights(filter: any): Observable<Flight[]> {
    //Uçuşları belirli kriterlere göre filtrelemek için kullanılan metot.
    return this.http.post<Flight[]>(`${this.baseUrl}/filter`, filter);
  }

  buyFlight(userId: number, flightId: number): Observable<void> {
    //Belirli bir uçuşu satın almak için kullanılan metot.
    return this.http.post<void>(`${this.baseUrl}/buy`, { userId, flightId });
  }

  cancelFlight(userId: number, flightId: number): Observable<void> {
    //Belirli bir uçuşu iptal etmek için kullanılan metot.
    return this.http.post<void>(`${this.baseUrl}/cancel`, { userId, flightId });
  }

  getUserFlights(userId: number): Observable<UserFlightDto[]> {
    //Kullanıcının uçuşlarını almak için kullanılan metot.
    return this.http.get<UserFlightDto[]>(`${this.baseUrl}/user/${userId}`);
  }
  
  getUsersByFlightId(id: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/${id}/users`);
  }
}
