import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  errorMessage: string = ''; //hata mesajını tutar

  constructor(private authService: AuthService, private router: Router) { }
  //bağımlılıkları enjekte eder.

  onSubmit() { //başlatıldığında kimlik doğrulama yapar, eşleşirse ana sayfaya yönlendirir.
    this.authService.login(this.loginData).subscribe((response: any) => {
      if (response && response.id) {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Invalid login response';
      }
    }, error => { // hata durumunda hata mesajını günceller.
      this.errorMessage = error.error;
      console.error('Login failed', error);
    });
  }
}
