import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    username: '',
    password: '',
    email: ''
  };

  successMessage: string = '';//Başarılı kayıt mesajını tutan değişken.
  errorMessage: string = '';//Hata mesajını tutan değişken.

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() { //kimlik doğrulamayı yapar, doğrulanırsa giriş sayfasına yönlendirir.
    this.authService.register(this.registerData).subscribe((response: any) => {
      this.successMessage = 'Registration successful.';
      this.errorMessage = '';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); // 2 saniye sonra login sayfasına yönlendir
    }, error => { //HaTa
      this.errorMessage = error.error;
      this.successMessage = '';
      console.error('Registration failed', error);
    });
  }
}
