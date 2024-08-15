/*
uygulamanızın yönlendirme yapılandırmasını tanımlar ve kullanıcıların 
belirli URL'lere gitmesini sağlar. Her URL, belirli bir component 
ile ilişkilendirilir ve kullanıcı bu URL'yi ziyaret ettiğinde 
ilgili bileşen görüntülenir.
*/

import { NgModule } from '@angular/core'; //Angular modüllerini tanımlamak için kullanılır.
import { RouterModule, Routes } from '@angular/router'; //Angular yönlendirme modülü ve rotaları tanımlamak için kullanılır.
import { FlightListComponent } from './flightComp/flight-list/flight-list.component';
import { FlightAddComponent } from './flightComp/flight-add/flight-add.component';
import { FlightUpdateComponent } from './flightComp/flight-update/flight-update.component';
import { LoginComponent } from './userComp/login/login.component';
import { FlightFilterComponent } from './flightComp/flight-filter/flight-filter.component';
import { RegisterComponent } from './userComp/register/register.component';
import { FlightDetailComponent } from './flightComp/flight-detail/flight-detail.component';
import { FlightMyComponent } from './flightComp/flight-my/flight-my.component'; 

const routes: Routes = [ //Yönlendirme yapılandırmasını tutan bir dizi.
  // path = URL yolu, component = bu yolla eşleşen URL'ye yönlendirilmiş component.
  { path: '', component: FlightListComponent },
  //Ana sayfa, FlightListComponent bileşenini gösterir.
  { path: 'add', component: FlightAddComponent },
  //'/add' URL'si, FlightAddComponent bileşenini gösterir.
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update/:id', component: FlightUpdateComponent },
  { path: 'filter', component: FlightFilterComponent },
  { path: 'flight-detail/:id', component: FlightDetailComponent },
  { path: 'my-flights', component: FlightMyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //Yönlendirme yapılandırmasını uygulamaya dahil eder.
  exports: [RouterModule]
  //Yönlendirme modülünü dışa aktarır, böylece uygulamanın diğer modülleri de kullanabilir.
})
export class AppRoutingModule { }
