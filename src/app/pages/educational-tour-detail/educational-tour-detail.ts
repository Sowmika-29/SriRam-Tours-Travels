import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EDUCATIONAL_PACKAGES, TourPackageDetails } from '../../data/educational-tours.data';
import { WhatsappService } from '../../services/whatsapp.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-educational-tour-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './educational-tour-detail.html',
  styleUrl: './educational-tour-detail.scss'
})
export class EducationalTourDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private whatsappService = inject(WhatsappService);

  package: TourPackageDetails | null = null;
  isModalOpen: boolean = false;

  // Form Fields
  enquiryForm = {
    name: '',
    institutionName: '',
    phone: '',
    numStudents: 50,
    travelDate: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const foundPkg = EDUCATIONAL_PACKAGES.find(p => p.slug === slug);
        if (foundPkg) {
          this.package = foundPkg;
          this.updateSEO();
          // Scroll to top on load
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Redirect if slug not found
          this.router.navigate(['/educational-tours']);
        }
      } else {
        this.router.navigate(['/educational-tours']);
      }
    });
  }

  private updateSEO(): void {
    if (!this.package) return;
    this.titleService.setTitle(`${this.package.title} - Educational Tour | SRI RAM TOURS`);
    this.metaService.updateTag({
      name: 'description',
      content: `${this.package.subtitle}. Safe & educational school/college tour: ${this.package.summary}. Custom student itineraries.`
    });
  }

  openEnquiryModal(): void {
    this.isModalOpen = true;
    this.enquiryForm = {
      name: '',
      institutionName: '',
      phone: '',
      numStudents: 50,
      travelDate: ''
    };
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  submitEnquiry(): void {
    if (!this.package) return;

    if (
      !this.enquiryForm.name.trim() ||
      !this.enquiryForm.institutionName.trim() ||
      !this.enquiryForm.phone.trim() ||
      !this.enquiryForm.travelDate.trim() ||
      this.enquiryForm.numStudents < 1
    ) {
      return;
    }

    const msg = `Hi Sri Ram Tours,\n\nWe are interested in the *${this.package.title} (${this.package.subtitle})* Educational Tour.\n\n*Enquiry Details:*\n- Contact Name: ${this.enquiryForm.name}\n- School / College Name: ${this.enquiryForm.institutionName}\n- Contact Number: ${this.enquiryForm.phone}\n- Number of Students: ${this.enquiryForm.numStudents}\n- Expected Travel Date: ${this.enquiryForm.travelDate}\n\nPlease share detailed itinerary and customization options.`;
    
    this.whatsappService.openChat(msg);
    this.closeModal();
  }

  getPackageDetails(): void {
    if (!this.package) return;
    const msg = `Hi Sri Ram Tours! Please share the detailed package details and itinerary for the *${this.package.title} (${this.package.subtitle})* Educational Tour.`;
    this.whatsappService.openChat(msg);
  }

  planThisTrip(): void {
    if (!this.package) return;
    const msg = `Hi Sri Ram Tours! We are planning a trip to *${this.package.title} (${this.package.subtitle})* and would like to customize the itinerary. Please connect me with a trip planner.`;
    this.whatsappService.openChat(msg);
  }

  requestQuote(): void {
    this.openEnquiryModal();
  }
}
