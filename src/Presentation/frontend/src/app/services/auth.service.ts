import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//HTTP istekleri yapmak için kullanılır.
import { Observable } from 'rxjs';//RxJS ile birlikte gelen, asenkron veri akışlarını temsil eden bir yapı.

@Injectable({
  providedIn: 'root'
  //Bu hizmetin kök enjeksiyon sağlayıcısında kullanılabilir olduğunu belirtir??
})
export class AuthService {
  private baseUrl = 'http://localhost:5057/api/auth';
  //Kimlik doğrulama API'sinin temel URL'si.

  constructor(private http: HttpClient) { }
  //HttpClient bağımlılığını enjekte eder.

  login(user: any): Observable<any> { //Giriş yapma işlemini gerçekleştiren metot.
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  register(user: any): Observable<any> { //Kayıt olma işlemini gerçekleştiren metot.
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
