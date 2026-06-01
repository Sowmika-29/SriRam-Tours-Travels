import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { MoodExplorerComponent } from '../../components/mood-explorer/mood-explorer.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { EducationalToursFeaturedComponent } from '../../components/educational-tours-featured/educational-tours-featured';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ExperiencesComponent,
    MoodExplorerComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    CtaBannerComponent,
    EducationalToursFeaturedComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
