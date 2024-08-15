/*
Bu arayüzler, uçuşlarla ilgili verileri taşımak ve işlemek 
için kullanılır. Örneğin, Flight arayüzü, genel uçuş bilgilerini 
temsil ederken, FlightCreateDto arayüzü yeni bir uçuş oluşturmak 
için gerekli olan bilgileri içerir. UserFlightDto arayüzü ise, 
kullanıcının satın aldığı veya rezerve ettiği uçuşları temsil eder.
*/

export interface Flight {
  id: number;
  departure: string;
  arrival: string;
  date: string;
  time: string;
  capacity: number;
  price: number;
}

export interface FlightCreateDto {
  departure: string;
  arrival: string;
  date: string;
  time: string;
  capacity: number;
  price: number;
}

export interface UserFlightDto {
  flightId: number;
  departure: string;
  arrival: string;
  date: string;
  time: string;
  capacity: number;
  price: number;
}