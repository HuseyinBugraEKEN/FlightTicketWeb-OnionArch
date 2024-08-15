/*
Bu modül, Angular uygulamasının temel yapı taşlarını bir araya getirir 
ve uygulamanın işlevselliğini sağlamak için gerekli bileşenleri, 
hizmetleri ve bağımlılıkları tanımlar.
*/

import { BrowserModule } from '@angular/platform-browser'; //Tarayıcı ile ilgili işlevleri sağlar ve uygulamanın çalışmasını sağlar.
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //Uygulamanın HTTP istekleri yapmasına olanak tanır.
import { FormsModule } from '@angular/forms'; //Angular'da template-driven formlar oluşturmak için kullanılır.
import { FlightModule } from './flightComp/flight.module'; // Flight modülünü import edin
import { UserModule } from './userComp/user.module'; // User modülünü import edin
import { AppRoutingModule } from './app-routing.module'; //Uygulamanın yönlendirme yapılandırmasını içerir ve bileşenler arasında gezinmeyi sağlar.
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; //Angular'ın temel direktiflerini (ngIf, ngFor vb.) ve pipeline (date, uppercase vb.) içerir.

@NgModule({
  declarations: [ //Bu modül tarafından tanımlanan components, direktifler ve pipelines.
    AppComponent,
  ],
  imports: [ //Bu modülün ihtiyaç duyduğu diğer modüller.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlightModule,
    UserModule,
    CommonModule 
  ],
  providers: [], // Uygulamanın genelinde kullanılacak hizmetler.
  bootstrap: [AppComponent] //Uygulamanın kök bileşeni
})
export class AppModule { }
