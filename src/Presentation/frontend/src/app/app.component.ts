/*
Uygulamanın en üst düzey bileşeni olarak hizmet verir ve genellikle 
uygulama çapında geçerli olan özellikleri ve işlevleri içerir.

LocalStorage: Kullanıcının oturum bilgileri burada saklanır. Bu, kullanıcının 
oturum açıp açmadığını ve kullanıcının rolünü kontrol etmek için kullanılır.

Router: Kullanıcıyı farklı sayfalara yönlendirmek için kullanılır. 
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  //Router bağımlılığını enjekte eder.

  isLoggedIn() {
    //Kullanıcının giriş yapıp yapmadığını kontrol eder. 
    //Kullanıcı oturum açmışsa localStorage'da 'user' anahtarının varlığını kontrol eder.
    return !!localStorage.getItem('user');
  }

  isAdmin() { //Admin check
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'Admin';
  }

  getUsername() { //Kullanıcının kullanıcı adını döndürür.
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.username || '';
  }

  logout() {
    //Kullanıcının oturumunu sonlandırır.
    //localStorage'daki 'user' anahtarını kaldırır ve kullanıcıyı giriş sayfasına yönlendirir.
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
