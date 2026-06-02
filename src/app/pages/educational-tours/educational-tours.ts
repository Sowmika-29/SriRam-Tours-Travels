import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WhatsappService } from '../../services/whatsapp.service';
import { AnimatedHeadingComponent } from '../../components/animated-heading/animated-heading.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface TourPackage {
  title: string;
  subtitle: string;
  summary: string;
  category: 'School Tours (1 Day)' | 'College Tours (2 Days)' | 'College Tours (3 Days)';
  keyAttractions: string[];
  image: string;
}

@Component({
  selector: 'app-educational-tours',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimatedHeadingComponent, ScrollRevealDirective],
  templateUrl: './educational-tours.html',
  styleUrl: './educational-tours.scss'
})
export class EducationalToursPage implements OnInit {
  searchQuery: string = '';
  selectedCategory: string = 'All';

  // Modal control
  isModalOpen: boolean = false;
  selectedPackage: TourPackage | null = null;

  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

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


  // Form Fields
  enquiryForm = {
    name: '',
    institutionName: '',
    phone: '',
    numStudents: 50,
    travelMonth: ''
  };

  categories = [
    'All',
    'School Tours (1 Day)',
    'College Tours (2 Days)',
    'College Tours (3 Days)'
  ];

  packages: TourPackage[] = [
    // School Tours (1 Day)
    {
      title: 'Munnar Package',
      subtitle: 'Munnar Rounds (Jeep Ride)',
      summary: 'Explore the rolling tea plantations, lush greenery, and scenic beauty of Munnar with an exciting Jeep ride before heading back.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Munnar Tea Estates', 'Jeep Ride', 'Scenic Viewpoints'],
      image: 'https://images.unsplash.com/photo-1625553200007-1ea025f1a928?w=800&q=80'
    },
    {
      title: 'Godavari Package',
      subtitle: 'Godavari & Bannariamman',
      summary: 'A spirituality and nature combined tour visiting the Godavari Dam, Pariyoor Amman Temple, Bannariamman Temple, and Bhavani Sagar Dam.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Godavari Dam', 'Pariyoor Amman Temple', 'Bannariamman Temple', 'Bhavani Sagar Dam'],
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
    },
    {
      title: 'Kallanai Package',
      subtitle: 'Kallanai & Thanjavur Heritage',
      summary: 'Immerse students in Chola history at the ancient Kallanai Dam, the Brihadeeswarar Big Temple, Thanjavur Palace, and Sivagangai Park.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Kallanai Dam', 'Brihadeeswarar Big Temple', 'Thanjavur Palace', 'Sivagangai Park'],
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80'
    },
    {
      title: 'Thiruvannamalai & Vellore Package',
      subtitle: 'Forts, Dams & Temples',
      summary: 'Embark on a spiritual and historical tour visiting Thiruvannamalai temple, Sathanur Dam, the spectacular Sripuram Golden Temple, and Vellore Fort.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Thiruvannamalai Temple', 'Sathanur Dam', 'Sripuram Golden Temple', 'Vellore Fort'],
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?w=800&q=80'
    },
    {
      title: 'Poombukar & Velankanni Package',
      subtitle: 'Coastal Heritage & Faith',
      summary: 'A beautiful coastal journey covering Poombuhar beach, Tranquebar (Thirukampadi) Fort, Karaikal harbor, Nagapattinam, and the historic Velankanni Church.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Poombuhar Beach', 'Tranquebar Fort', 'Karaikal Harbor', 'Velankanni Church', 'Thanjavur'],
      image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&q=80'
    },
    {
      title: 'Waterfall and Temple Package',
      subtitle: 'Monkey Falls & Masaniamman',
      summary: 'Connect students with nature at Monkey Falls, Aliyar Dam, Thirumoorthy Dam, Anaimalai, Masaniamman Temple, and Amaravathi Crocodile Park.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Monkey Falls', 'Aliyar Dam', 'Thirumoorthy Dam', 'Masaniamman Temple', 'Crocodile Park'],
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'
    },
    {
      title: 'Kumbakonam & Thanjavur Package',
      subtitle: 'Temple Architecture & Heritage Lakes',
      summary: 'Study Dravidian temple art and architecture across Thanjavur Palace, Swamimalai, Kumbakonam temples, and the sacred Mahamaham Lake.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Periya Kovil', 'Thanjavur Palace', 'Swamimalai', 'Kumbakonam Temples', 'Mahamaham Lake'],
      image: 'https://images.unsplash.com/photo-1600100397990-24b32252c4b4?w=800&q=80'
    },
    {
      title: 'Madurai & Pazhamuthirsolai Package',
      subtitle: 'Ancient Capital Excursion',
      summary: 'A journey into the heart of Madurai featuring Pazhamuthirsolai Murugan temple, Nayakkar Mahal, the glorious Meenakshi Amman Temple, and Vaigai Dam.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Pazhamuthirsolai Temple', 'Nayakkar Mahal', 'Meenakshi Amman Temple', 'Vaigai Dam'],
      image: 'https://images.unsplash.com/photo-1609137144813-176847847bd6?w=800&q=80'
    },
    {
      title: 'Kutralam Package',
      subtitle: 'The Spa of South India',
      summary: 'Refresh in the natural waterfalls of Kutralam (Old Falls, Main Falls, and Five Falls) and visit the historic town of Srivilliputhur.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Old Kutralam Falls', 'Main & Five Falls', 'Srivilliputhur Andal Temple'],
      image: 'https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?w=800&q=80'
    },
    {
      title: 'Ooty Package',
      subtitle: 'The Queen of Hill Stations',
      summary: 'Experience cold mountain air and botanical sciences at Doddabetta Peak, Botanical Gardens, Ooty Lake boating, and Coonoor Sims Park.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Doddabetta Peak', 'Botanical Garden', 'Ooty Lake Boating', 'Sims Park Coonoor'],
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80'
    },
    {
      title: 'Kodaikanal Package',
      subtitle: 'Princess of Hill Stations',
      summary: 'Geological study at Pillar Rocks, nature walks along Coaker\'s Walk, Suicide Point, Ooty-like Kodaikanal Lake boating, and Vaigai Dam.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Pillar Rocks', 'Coaker\'s Walk', 'Kodaikanal Lake Boating', 'Vaigai Dam'],
      image: 'https://images.unsplash.com/photo-1589982441121-817ab9bc7144?w=800&q=80'
    },
    {
      title: 'Thekkadi & Vaigai Dam Package',
      subtitle: 'Wildlife & Water Resource Study',
      summary: 'Encounter diverse flora and fauna at Periyar Wildlife Sanctuary in Thekkady, Suruli Falls, and study water engineering at Vaigai Dam.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Thekkady Lake', 'Suruli Falls', 'Vaigai Dam Hydro-Project'],
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80'
    },
    {
      title: 'Mettur Dam - Hogenakkal Package',
      subtitle: 'Coracle Boating & Hydro Systems',
      summary: 'Observe the mighty Kaveri river falling through Hogenakkal canyons, ride local coracles, and visit the massive Mettur Dam hydro reservoir.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Hogenakkal Waterfalls', 'Coracle Boating', 'Mettur Dam Reservoir'],
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80'
    },
    {
      title: 'Kerala Student Package',
      subtitle: 'Guruvayur & Thrissur Zoo',
      summary: 'A mix of wildlife education and heritage covering Guruvayur, Chavakkad beach, Thrissur Zoo & Museum, and Malampuzha Dam gardens.',
      category: 'School Tours (1 Day)',
      keyAttractions: ['Guruvayur Heritage', 'Thrissur Zoo & Museum', 'Malampuzha Dam Gardens'],
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80'
    },

    // College Tours (2 Days)
    {
      title: 'Chennai-Pondicherry-Pitchavaram Package',
      subtitle: 'Mangrove Forests & French Colony',
      summary: 'Day 1: Chidambaram, Row boating in Pitchavaram Mangrove forest, French streets of Pondicherry. Day 2: Mahabalipuram shore temples, Chennai sightseeing.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Pitchavaram Mangroves', 'Pondicherry Promenade', 'Mahabalipuram Shore Temples', 'Chennai City'],
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
    },
    {
      title: 'Vibe Chennai Package',
      subtitle: 'Metropolis & Golden Temples',
      summary: 'Day 1: Melmaruvathur, Marina Beach, Anna Memorial, Astalakshmi temple, Valluvar Kottam. Day 2: Kanchipuram silk weavers, Sripuram Golden Temple, Vellore Fort.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Marina Beach', 'Valluvar Kottam', 'Kanchipuram Silk Center', 'Vellore Golden Temple & Fort'],
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
    },
    {
      title: 'Vibe Kerala Package',
      subtitle: 'Guruvayur & Athirappally Falls',
      summary: 'Day 1: Guruvayur, Chavakkad Beach, Cherai Beach, Cochin Harbour cruising. Day 2: Chottanikkara temple, the giant Athirappally and Vazhachal waterfalls, Kalady.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Cherai Beach', 'Cochin Harbour Cruising', 'Athirappally Waterfalls', 'Kaladi Tower'],
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'
    },
    {
      title: 'Ooty & Black Thunder Package',
      subtitle: 'Hill Station Train & Water Park',
      summary: 'Day 1: Coimbatore to Ooty single-way scenic toy train ride, Ooty sights. Day 2: Thrills at Black Thunder Water Theme Park and Thenthirupathi temple visit.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Ooty Toy Train Ride', 'Botanical Garden', 'Black Thunder Water Park', 'Thenthirupathi'],
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80'
    },
    {
      title: 'Kongu Package',
      subtitle: 'Western Ghats Waterfalls & Reservoirs',
      summary: 'Day 1: Thirumoorthy Falls, Aliyar Dam, Monkey Falls, Malampuzha Dam. Day 2: Kovai Kutralam waterfalls, Thenthirupathi, Maruthamalai temple, Bhavanisagar Dam.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Monkey Falls & Aliyar Dam', 'Malampuzha Gardens', 'Kovai Kutralam', 'Maruthamalai Hill Temple'],
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80'
    },
    {
      title: 'Rameswaram & Thiruchendur Package',
      subtitle: 'Historic Southern Pilgrimage & Coastline',
      summary: 'Day 1: Rameswaram, Devipattanam, Thirupullani, Panchalamkuruchi, Chinthalakarai. Day 2: Thiruchendur, Thirunelveli, Kayatharu, Thiruparamkundram, Madurai Rounds.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Pamban Bridge', 'Kattabomman Memorial Fort', 'Thiruchendur Shore Temple', 'Madurai Temple'],
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80'
    },
    {
      title: 'Kerala Spice & Port Package',
      subtitle: 'Thekkady Wilderness & Cochin Harbour',
      summary: 'Day 1: Thekkady forest hike, Vandiperiyar tea gardens, Ettumanoor. Day 2: Cochin harbour boating, Fort Kochi, Guruvayur temple, Malampuzha dam.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Vandiperiyar Views', 'Cochin Harbour Cruise', 'Fort Kochi Chinese Nets', 'Guruvayur Temple'],
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
    },
    {
      title: 'Rameswaram & Madurai Package',
      subtitle: 'Monuments, Bridges & Palaces',
      summary: 'Day 1: Kundrakudi, Pillayarpatti temple, Pamban bridge, Rameswaram island. Day 2: Thirupullani beach, Madurai Palace, Meenakshi temple, Pazhamudhirsolai.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Pillayarpatti Ganesha', 'Rameswaram Island', 'Nayakkar Palace', 'Meenakshi Temple'],
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80'
    },
    {
      title: 'Kanyakumari & Kovalam Beach Package',
      subtitle: 'Southern Tip & Golden Kerala Sands',
      summary: 'Day 1: Kanyakumari sunrise, Padmanabhapuram wooden palace, Thiruparappu falls, Mathur aqueduct. Day 2: Trivandrum Zoo/Museum, Kovalam beach.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Vivekananda Rock Memorial', 'Padmanabhapuram Palace', 'Mathur Hanging Trough', 'Kovalam Beach'],
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80'
    },
    {
      title: 'Madurai & Kutralam Tour Package',
      subtitle: 'Palace Architecture & Scenic Cascades',
      summary: 'Day 1: Madurai Meenakshi Temple, Nayakkar Palace, Thiruparankundram. Day 2: Old Kutralam, Five Falls, Thiruchendur shore temple, Chinthalakarai.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Meenakshi Temple', 'Nayakkar Mahal', 'Kutralam Waterfalls', 'Thiruchendur Temple'],
      image: 'https://images.unsplash.com/photo-1609137144813-176847847bd6?w=800&q=80'
    },
    {
      title: 'Kanyakumari & Kerala Nature Package',
      subtitle: 'Scenic Waterfalls & Dams',
      summary: 'Day 1: Kanyakumari, Suchindram temple, Thiruparappu Falls, Mathur aqueduct. Day 2: Padmanabhapuram palace, Karayar Dam forest, Agasthiyar Falls, Kutralam.',
      category: 'College Tours (2 Days)',
      keyAttractions: ['Kanyakumari Tip', 'Thiruparappu Falls', 'Karayar Dam & Forest Boating', 'Agasthiyar Falls'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80'
    },

    // College Tours (3 Days)
    {
      title: 'Cochin & Trivandrum Package',
      subtitle: 'Jatayu Monument & Cliff Beaches',
      summary: 'Day 1: Cochin Marine Drive, Fort Kochi, Dutch Palace. Day 2: Varkala Cliff Beach, Jatayu Earth Center giant sculpture. Day 3: Trivandrum Palace, Zoo, Kovalam.',
      category: 'College Tours (3 Days)',
      keyAttractions: ['Cochin Port', 'Jatayu Earth Center (Giant Eagle)', 'Varkala Beach Cliffs', 'Trivandrum Museum'],
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80'
    },
    {
      title: 'Coorg & Chikmagalur Explorer',
      subtitle: 'Coffee Plantations & Heritage Palaces',
      summary: 'Day 1: Mysore Palace, Chamundi Hills, Brindavan Gardens. Day 2: Coorg Abbey Falls, Dubare Elephant Camp, Golden Temple. Day 3: Chikmagalur peak trek.',
      category: 'College Tours (3 Days)',
      keyAttractions: ['Mysore Palace', 'Dubare Elephant Camp', 'Abbey Falls Coorg', 'Chikmagalur Peak Trek'],
      image: 'https://images.unsplash.com/photo-1600100397990-24b32252c4b4?w=800&q=80'
    },
    {
      title: 'Vibe Karnataka Heritage & Adventure',
      subtitle: 'Western Coastline, Forests & Rivers',
      summary: 'Day 1: Mysore Palace, Chamundi Hill. Day 2: Dandeli River Rafting, forest safari. Day 3: Chikmagalur hills, Udupi Krishna temple and Malpe beach.',
      category: 'College Tours (3 Days)',
      keyAttractions: ['Mysore Heritage', 'Dandeli Water Rafting', 'Chikmagalur Peak', 'Udupi Malpe Beach'],
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?w=800&q=80'
    },
    {
      title: 'Hyderabad Package',
      subtitle: 'Royal Nizam Capital Exploration',
      summary: 'Day 1: Golconda Fort, Qutb Shahi Tombs. Day 2: Ramoji Film City backlots. Day 3: Charminar, Salar Jung Museum, Birla Mandir, Hussain Sagar Lake boating.',
      category: 'College Tours (3 Days)',
      keyAttractions: ['Golconda Fort Light Show', 'Ramoji Film City', 'Charminar & Laad Bazaar', 'Salar Jung Museum'],
      image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80'
    }
  ];

  expandedPackages: { [key: string]: boolean } = {};
  visibleLimit: number = 6;

  filteredPackages(): TourPackage[] {
    return this.packages.filter(pkg => {
      const matchesSearch = pkg.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            pkg.subtitle.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            pkg.summary.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            pkg.keyAttractions.some(attr => attr.toLowerCase().includes(this.searchQuery.toLowerCase()));
      const matchesCategory = this.selectedCategory === 'All' || pkg.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  getVisiblePackages(): TourPackage[] {
    return this.filteredPackages().slice(0, this.visibleLimit);
  }

  hasMorePackages(): boolean {
    return this.filteredPackages().length > this.visibleLimit;
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.visibleLimit = 6;
    this.expandedPackages = {};
  }

  onSearchChange() {
    this.visibleLimit = 6;
    this.expandedPackages = {};
  }

  toggleExpand(pkgTitle: string) {
    this.expandedPackages[pkgTitle] = !this.expandedPackages[pkgTitle];
  }

  showMorePackages() {
    this.visibleLimit = this.packages.length;
  }

  openEnquiryModal(pkg: TourPackage) {
    this.selectedPackage = pkg;
    this.isModalOpen = true;
    // Reset form fields but keep package title
    this.enquiryForm = {
      name: '',
      institutionName: '',
      phone: '',
      numStudents: 50,
      travelMonth: ''
    };
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedPackage = null;
  }

  submitEnquiry() {
    if (!this.selectedPackage) return;

    // Explicit validation check
    if (
      !this.enquiryForm.name.trim() ||
      !this.enquiryForm.institutionName.trim() ||
      !this.enquiryForm.phone.trim() ||
      !this.enquiryForm.travelMonth.trim() ||
      this.enquiryForm.numStudents < 1
    ) {
      return;
    }
    
    // Construct pre-filled message
    const msg = `Hi Sri Ram Tours,\n\nWe are interested in the *${this.selectedPackage.title} (${this.selectedPackage.subtitle})* Educational Tour.\n\n*Institution Details:*\n- Contact Name: ${this.enquiryForm.name}\n- Institution Name: ${this.enquiryForm.institutionName}\n- Contact Number: ${this.enquiryForm.phone}\n- Number of Students: ${this.enquiryForm.numStudents}\n- Expected Travel Month: ${this.enquiryForm.travelMonth}\n\nPlease share package details, itinerary, and pricing for this package.`;
    
    // Trigger WhatsApp
    const whatsappUrl = `https://wa.me/919486547938?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    
    this.closeModal();
  }
}
