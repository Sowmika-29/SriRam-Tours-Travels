import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { DomesticTrips } from './pages/domestic-trips/domestic-trips';
import { InternationalTrips } from './pages/international-trips/international-trips';
import { FleetPage } from './pages/fleet-page/fleet-page';
import { ServicesPage } from './pages/services-page/services-page';
import { AboutPage } from './pages/about-page/about-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { EducationalToursPage } from './pages/educational-tours/educational-tours';

export const routes: Routes = [
  { path: '', component: Home, data: { animation: 'HomePage' } },
  { path: 'domestic-trips', component: DomesticTrips, data: { animation: 'DomesticPage' } },
  { path: 'international-trips', component: InternationalTrips, data: { animation: 'InternationalPage' } },
  { path: 'fleet', component: FleetPage, data: { animation: 'FleetPage' } },
  { path: 'services', component: ServicesPage, data: { animation: 'ServicesPage' } },
  { path: 'educational-tours', component: EducationalToursPage, data: { animation: 'EducationalToursPage' } },
  { path: 'about', component: AboutPage, data: { animation: 'AboutPage' } },
  { path: 'contact', component: ContactPage, data: { animation: 'ContactPage' } },
  { path: '**', redirectTo: '' }
];
