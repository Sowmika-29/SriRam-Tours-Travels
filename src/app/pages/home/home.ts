import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
export class Home implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Best Travel Agency in Karur | SRI RAM Tour & Travels');
    this.meta.updateTag({
      name: 'description',
      content: 'Book premium bus rentals & custom tour packages (Kerala, Kashmir & more) with SRI RAM Tour & Travels in Karur, Tamil Nadu. Trusted since 2017. Call 9486547938!'
    });
  }
}

