import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { EDUCATIONAL_PACKAGES, TourPackageDetails } from '../../data/educational-tours.data';

@Component({
  selector: 'app-educational-tours',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './educational-tours.html',
  styleUrl: './educational-tours.scss'
})
export class EducationalToursPage implements OnInit {
  searchQuery: string = '';
  selectedCategory: string = 'All';
  visibleLimit: number = 6;

  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  packages: TourPackageDetails[] = EDUCATIONAL_PACKAGES;

  categories = [
    'All',
    'School Tours (1 Day)',
    'College Tours (2 Days)',
    'College Tours (3 Days)'
  ];

  hoveredIndex: number | null = null;

  getCategoryPath(category: string): string {
    if (category.toLowerCase().includes('school')) {
      return 'school-tours';
    }
    return 'college-tours';
  }

  getShortCategory(category: string): string {
    if (category.includes('1 Day')) return '1 Day';
    if (category.includes('2 Days')) return '2 Days';
    if (category.includes('3 Days')) return '3 Days';
    return category;
  }

  onCellMouseEnter(index: number): void {
    this.hoveredIndex = index;
  }

  onCellMouseLeave(): void {
    this.hoveredIndex = null;
  }

  isNeighbor(index: number): boolean {
    if (this.hoveredIndex === null) return false;
    
    const hRow = Math.floor(this.hoveredIndex / 3);
    const hCol = this.hoveredIndex % 3;
    
    const tRow = Math.floor(index / 3);
    const tCol = index % 3;
    
    const rowDiff = Math.abs(hRow - tRow);
    const colDiff = Math.abs(hCol - tCol);
    
    return (rowDiff <= 1 && colDiff <= 1) && (this.hoveredIndex !== index);
  }

  ngOnInit() {
    this.title.setTitle('Educational Trips & College Tours in Karur | SRI RAM');
    this.meta.updateTag({
      name: 'description',
      content: 'Safe & educational school tours and college excursions from Karur. Multi-day and single-day packages with custom itineraries.'
    });

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        const cat = params['category'];
        if (this.categories.includes(cat)) {
          this.selectedCategory = cat;
        }
      }
    });
  }

  get visibleCategories(): string[] {
    if (this.selectedCategory === 'All') {
      return this.categories.filter(cat => cat !== 'All');
    }
    return [this.selectedCategory];
  }

  getFilteredPackagesByCategory(cat: string): TourPackageDetails[] {
    return this.packages.filter(pkg => {
      const matchesSearch = pkg.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            pkg.subtitle.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            pkg.summary.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            pkg.keyAttractions.some(attr => attr.toLowerCase().includes(this.searchQuery.toLowerCase()));
      const matchesCategory = pkg.category === cat;
      return matchesSearch && matchesCategory;
    });
  }

  hasNoSearchResults(): boolean {
    return this.visibleCategories.every(cat => this.getFilteredPackagesByCategory(cat).length === 0);
  }
}
