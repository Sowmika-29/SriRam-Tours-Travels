export interface ItinerarySlot {
  time: string;
  title: string;
  description: string;
}

export interface DayItinerary {
  dayNumber: number;
  dayTitle: string;
  slots: ItinerarySlot[];
}

export interface TourPackageDetails {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: 'School Tours (1 Day)' | 'College Tours (2 Days)' | 'College Tours (3 Days)';
  keyAttractions: string[];
  image: string;
  
  // Immersive details
  overview: string;
  highlights: string[];
  journeySummary: string;
  itinerary: DayItinerary[];
  gallery: string[];
}

// Helper to convert title to URL-friendly slug
export function getSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .replace('-package', '');
}

// Base packages data as defined originally
export const BASE_PACKAGES = [
  // School Tours (1 Day)
  {
    title: 'Munnar Package',
    subtitle: 'Munnar Rounds (Jeep Ride)',
    summary: 'Explore the rolling tea plantations, lush greenery, and scenic beauty of Munnar with an exciting Jeep ride before heading back.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Munnar Tea Estates', 'Jeep Ride', 'Scenic Viewpoints'],
    image: 'https://images.unsplash.com/photo-1625553200007-1ea025f1a928?w=800&q=80'
  },
  {
    title: 'Godavari Package',
    subtitle: 'Godavari & Bannariamman',
    summary: 'A spirituality and nature combined tour visiting the Godavari Dam, Pariyoor Amman Temple, Bannariamman Temple, and Bhavani Sagar Dam.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Godavari Dam', 'Pariyoor Amman Temple', 'Bannariamman Temple', 'Bhavani Sagar Dam'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
  },
  {
    title: 'Kallanai Package',
    subtitle: 'Kallanai & Thanjavur Heritage',
    summary: 'Immerse students in Chola history at the ancient Kallanai Dam, the Brihadeeswarar Big Temple, Thanjavur Palace, and Sivagangai Park.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Kallanai Dam', 'Brihadeeswarar Big Temple', 'Thanjavur Palace', 'Sivagangai Park'],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80'
  },
  {
    title: 'Thiruvannamalai & Vellore Package',
    subtitle: 'Forts, Dams & Temples',
    summary: 'Embark on a spiritual and historical tour visiting Thiruvannamalai temple, Sathanur Dam, the spectacular Sripuram Golden Temple, and Vellore Fort.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Thiruvannamalai Temple', 'Sathanur Dam', 'Sripuram Golden Temple', 'Vellore Fort'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?w=800&q=80'
  },
  {
    title: 'Poombukar & Velankanni Package',
    subtitle: 'Coastal Heritage & Faith',
    summary: 'A beautiful coastal journey covering Poombuhar beach, Tranquebar (Thirukampadi) Fort, Karaikal harbor, Nagapattinam, and the historic Velankanni Church.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Poombuhar Beach', 'Tranquebar Fort', 'Karaikal Harbor', 'Velankanni Church', 'Thanjavur'],
    image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&q=80'
  },
  {
    title: 'Waterfall and Temple Package',
    subtitle: 'Monkey Falls & Masaniamman',
    summary: 'Connect students with nature at Monkey Falls, Aliyar Dam, Thirumoorthy Dam, Anaimalai, Masaniamman Temple, and Amaravathi Crocodile Park.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Monkey Falls', 'Aliyar Dam', 'Thirumoorthy Dam', 'Masaniamman Temple', 'Crocodile Park'],
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'
  },
  {
    title: 'Kumbakonam & Thanjavur Package',
    subtitle: 'Temple Architecture & Heritage Lakes',
    summary: 'Study Dravidian temple art and architecture across Thanjavur Palace, Swamimalai, Kumbakonam temples, and the sacred Mahamaham Lake.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Periya Kovil', 'Thanjavur Palace', 'Swamimalai', 'Kumbakonam Temples', 'Mahamaham Lake'],
    image: 'https://images.unsplash.com/photo-1600100397990-24b32252c4b4?w=800&q=80'
  },
  {
    title: 'Madurai & Pazhamuthirsolai Package',
    subtitle: 'Ancient Capital Excursion',
    summary: 'A journey into the heart of Madurai featuring Pazhamuthirsolai Murugan temple, Nayakkar Mahal, the glorious Meenakshi Amman Temple, and Vaigai Dam.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Pazhamuthirsolai Temple', 'Nayakkar Mahal', 'Meenakshi Amman Temple', 'Vaigai Dam'],
    image: 'https://images.unsplash.com/photo-1609137144813-176847847bd6?w=800&q=80'
  },
  {
    title: 'Kutralam Package',
    subtitle: 'The Spa of South India',
    summary: 'Refresh in the natural waterfalls of Kutralam (Old Falls, Main Falls, and Five Falls) and visit the historic town of Srivilliputhur.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Old Kutralam Falls', 'Main & Five Falls', 'Srivilliputhur Andal Temple'],
    image: 'https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?w=800&q=80'
  },
  {
    title: 'Ooty Package',
    subtitle: 'The Queen of Hill Stations',
    summary: 'Experience cold mountain air and botanical sciences at Doddabetta Peak, Botanical Gardens, Ooty Lake boating, and Coonoor Sims Park.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Doddabetta Peak', 'Botanical Garden', 'Ooty Lake Boating', 'Sims Park Coonoor'],
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80'
  },
  {
    title: 'Kodaikanal Package',
    subtitle: 'Princess of Hill Stations',
    summary: 'Geological study at Pillar Rocks, nature walks along Coaker\'s Walk, Suicide Point, Ooty-like Kodaikanal Lake boating, and Vaigai Dam.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Pillar Rocks', 'Coaker\'s Walk', 'Kodaikanal Lake Boating', 'Vaigai Dam'],
    image: 'https://images.unsplash.com/photo-1589982441121-817ab9bc7144?w=800&q=80'
  },
  {
    title: 'Thekkadi & Vaigai Dam Package',
    subtitle: 'Wildlife & Water Resource Study',
    summary: 'Encounter diverse flora and fauna at Periyar Wildlife Sanctuary in Thekkady, Suruli Falls, and study water engineering at Vaigai Dam.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Thekkady Lake', 'Suruli Falls', 'Vaigai Dam Hydro-Project'],
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80'
  },
  {
    title: 'Mettur Dam - Hogenakkal Package',
    subtitle: 'Coracle Boating & Hydro Systems',
    summary: 'Observe the mighty Kaveri river falling through Hogenakkal canyons, ride local coracles, and visit the massive Mettur Dam hydro reservoir.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Hogenakkal Waterfalls', 'Coracle Boating', 'Mettur Dam Reservoir'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80'
  },
  {
    title: 'Kerala Student Package',
    subtitle: 'Guruvayur & Thrissur Zoo',
    summary: 'A mix of wildlife education and heritage covering Guruvayur, Chavakkad beach, Thrissur Zoo & Museum, and Malampuzha Dam gardens.',
    category: 'School Tours (1 Day)' as const,
    keyAttractions: ['Guruvayur Heritage', 'Thrissur Zoo & Museum', 'Malampuzha Dam Gardens'],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80'
  },

  // College Tours (2 Days)
  {
    title: 'Chennai-Pondicherry-Pitchavaram Package',
    subtitle: 'Mangrove Forests & French Colony',
    summary: 'Day 1: Chidambaram, Row boating in Pitchavaram Mangrove forest, French streets of Pondicherry. Day 2: Mahabalipuram shore temples, Chennai sightseeing.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Pitchavaram Mangroves', 'Pondicherry Promenade', 'Mahabalipuram Shore Temples', 'Chennai City'],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
  },
  {
    title: 'Vibe Chennai Package',
    subtitle: 'Metropolis & Golden Temples',
    summary: 'Day 1: Melmaruvathur, Marina Beach, Anna Memorial, Astalakshmi temple, Valluvar Kottam. Day 2: Kanchipuram silk weavers, Sripuram Golden Temple, Vellore Fort.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Marina Beach', 'Valluvar Kottam', 'Kanchipuram Silk Center', 'Vellore Golden Temple & Fort'],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
  },
  {
    title: 'Vibe Kerala Package',
    subtitle: 'Guruvayur & Athirappally Falls',
    summary: 'Day 1: Guruvayur, Chavakkad Beach, Cherai Beach, Cochin Harbour cruising. Day 2: Chottanikkara temple, the giant Athirappally and Vazhachal waterfalls, Kalady.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Cherai Beach', 'Cochin Harbour Cruising', 'Athirappally Waterfalls', 'Kaladi Tower'],
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'
  },
  {
    title: 'Ooty & Black Thunder Package',
    subtitle: 'Hill Station Train & Water Park',
    summary: 'Day 1: Coimbatore to Ooty single-way scenic toy train ride, Ooty sights. Day 2: Thrills at Black Thunder Water Theme Park and Thenthirupathi temple visit.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Ooty Toy Train Ride', 'Botanical Garden', 'Black Thunder Water Park', 'Thenthirupathi'],
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80'
  },
  {
    title: 'Kongu Package',
    subtitle: 'Western Ghats Waterfalls & Reservoirs',
    summary: 'Day 1: Thirumoorthy Falls, Aliyar Dam, Monkey Falls, Malampuzha Dam. Day 2: Kovai Kutralam waterfalls, Thenthirupathi, Maruthamalai temple, Bhavanisagar Dam.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Monkey Falls & Aliyar Dam', 'Malampuzha Gardens', 'Kovai Kutralam', 'Maruthamalai Hill Temple'],
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80'
  },
  {
    title: 'Rameswaram & Thiruchendur Package',
    subtitle: 'Historic Southern Pilgrimage & Coastline',
    summary: 'Day 1: Rameswaram, Devipattanam, Thirupullani, Panchalamkuruchi, Chinthalakarai. Day 2: Thiruchendur, Thirunelveli, Kayatharu, Thiruparamkundram, Madurai Rounds.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Pamban Bridge', 'Kattabomman Memorial Fort', 'Thiruchendur Shore Temple', 'Madurai Temple'],
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80'
  },
  {
    title: 'Kerala Spice & Port Package',
    subtitle: 'Thekkady Wilderness & Cochin Harbour',
    summary: 'Day 1: Thekkady forest hike, Vandiperiyar tea gardens, Ettumanoor. Day 2: Cochin harbour boating, Fort Kochi, Guruvayur temple, Malampuzha dam.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Vandiperiyar Views', 'Cochin Harbour Cruise', 'Fort Kochi Chinese Nets', 'Guruvayur Temple'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
  },
  {
    title: 'Rameswaram & Madurai Package',
    subtitle: 'Monuments, Bridges & Palaces',
    summary: 'Day 1: Kundrakudi, Pillayarpatti temple, Pamban bridge, Rameswaram island. Day 2: Thirupullani beach, Madurai Palace, Meenakshi temple, Pazhamudhirsolai.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Pillayarpatti Ganesha', 'Rameswaram Island', 'Nayakkar Palace', 'Meenakshi Temple'],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80'
  },
  {
    title: 'Kanyakumari & Kovalam Beach Package',
    subtitle: 'Southern Tip & Golden Kerala Sands',
    summary: 'Day 1: Kanyakumari sunrise, Padmanabhapuram wooden palace, Thiruparappu falls, Mathur aqueduct. Day 2: Trivandrum Zoo/Museum, Kovalam beach.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Vivekananda Rock Memorial', 'Padmanabhapuram Palace', 'Mathur Hanging Trough', 'Kovalam Beach'],
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80'
  },
  {
    title: 'Madurai & Kutralam Tour Package',
    subtitle: 'Palace Architecture & Scenic Cascades',
    summary: 'Day 1: Madurai Meenakshi Temple, Nayakkar Palace, Thiruparankundram. Day 2: Old Kutralam, Five Falls, Thiruchendur shore temple, Chinthalakarai.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Meenakshi Temple', 'Nayakkar Mahal', 'Kutralam Waterfalls', 'Thiruchendur Temple'],
    image: 'https://images.unsplash.com/photo-1609137144813-176847847bd6?w=800&q=80'
  },
  {
    title: 'Kanyakumari & Kerala Nature Package',
    subtitle: 'Scenic Waterfalls & Dams',
    summary: 'Day 1: Kanyakumari, Suchindram temple, Thiruparappu Falls, Mathur aqueduct. Day 2: Padmanabhapuram palace, Karayar Dam forest, Agasthiyar Falls, Kutralam.',
    category: 'College Tours (2 Days)' as const,
    keyAttractions: ['Kanyakumari Tip', 'Thiruparappu Falls', 'Karayar Dam & Forest Boating', 'Agasthiyar Falls'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80'
  },

  // College Tours (3 Days)
  {
    title: 'Cochin & Trivandrum Package',
    subtitle: 'Jatayu Monument & Cliff Beaches',
    summary: 'Day 1: Cochin Marine Drive, Fort Kochi, Dutch Palace. Day 2: Varkala Cliff Beach, Jatayu Earth Center giant sculpture. Day 3: Trivandrum Palace, Zoo, Kovalam.',
    category: 'College Tours (3 Days)' as const,
    keyAttractions: ['Cochin Port', 'Jatayu Earth Center (Giant Eagle)', 'Varkala Beach Cliffs', 'Trivandrum Museum'],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80'
  },
  {
    title: 'Coorg & Chikmagalur Explorer',
    subtitle: 'Coffee Plantations & Heritage Palaces',
    summary: 'Day 1: Mysore Palace, Chamundi Hills, Brindavan Gardens. Day 2: Coorg Abbey Falls, Dubare Elephant Camp, Golden Temple. Day 3: Chikmagalur peak trek.',
    category: 'College Tours (3 Days)' as const,
    keyAttractions: ['Mysore Palace', 'Dubare Elephant Camp', 'Abbey Falls Coorg', 'Chikmagalur Peak Trek'],
    image: 'https://images.unsplash.com/photo-1600100397990-24b32252c4b4?w=800&q=80'
  },
  {
    title: 'Vibe Karnataka Heritage & Adventure',
    subtitle: 'Western Coastline, Forests & Rivers',
    summary: 'Day 1: Mysore Palace, Chamundi Hill. Day 2: Dandeli River Rafting, forest safari. Day 3: Chikmagalur hills, Udupi Krishna temple and Malpe beach.',
    category: 'College Tours (3 Days)' as const,
    keyAttractions: ['Mysore Heritage', 'Dandeli Water Rafting', 'Chikmagalur Peak', 'Udupi Malpe Beach'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?w=800&q=80'
  },
  {
    title: 'Hyderabad Package',
    subtitle: 'Royal Nizam Capital Exploration',
    summary: 'Day 1: Golconda Fort, Qutb Shahi Tombs. Day 2: Ramoji Film City backlots. Day 3: Charminar, Salar Jung Museum, Birla Mandir, Hussain Sagar Lake boating.',
    category: 'College Tours (3 Days)' as const,
    keyAttractions: ['Golconda Fort Light Show', 'Ramoji Film City', 'Charminar & Laad Bazaar', 'Salar Jung Museum'],
    image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80'
  }
];

// Rich overrides for popular packages
const PACKAGE_OVERRIDES: Record<string, Partial<TourPackageDetails>> = {
  'munnar': {
    overview: 'High up in the misty Western Ghats, Munnar is a majestic tapestry of rolling tea gardens, aromatic spice plantations, and pristine mountain streams. Designed to give students a deep appreciation of mountain biodiversity and tea manufacturing history, this one-day itinerary is loaded with visual and educational wonders.',
    highlights: [
      'Interactive guided tour of the Munnar Tea Museum to study historical manufacturing processes.',
      'Thrilling off-road Jeep ride traversing rugged terrain and remote hill viewpoints.',
      'Observation of unique mountain ecosystems, endangered Nilgiri Tahr habitats, and high-altitude flora.',
      'Field study on the local agro-economy and sustainable plantation management.'
    ],
    journeySummary: 'A refreshing single-day excursion scaling the high altitudes of Munnar, returning with rich knowledge of spice cultivation and industrial tea production.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Exploring the Mist-Kissed Heights',
        slots: [
          { time: '08:30 AM', title: 'Arrival & Scenic Jeep Ride', description: 'Arrive at the foothills and board the specialized off-road jeeps. Ascend through secret pathways winding around green tea estates, feeling the temperature drop.' },
          { time: '11:30 AM', title: 'Tea Estate & Museum Exploration', description: 'Visit a historic tea factory. Students will observe the live processing of tea leaves—from withering to CTC oxidation—and browse colonial archives at the museum.' },
          { time: '02:30 PM', title: 'Flora Study & Jeep Safari', description: 'Embark on a guided nature trek around the scenic viewpoints. Identify rare mountain plants and study soil conservation methods on steep gradients.' },
          { time: '05:30 PM', title: 'Evening Departure & Debrief', description: 'Gather at the viewpoint for team activities and hot tea, followed by the return journey back to the institution.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'
    ]
  },
  'godavari': {
    overview: 'A spiritually enriching and scientifically engaging tour mapping the fertile basins of the Godavari and Bannari regions. This package integrates civil engineering studies at massive river dams with heritage studies at legendary, architecturally significant temples.',
    highlights: [
      'In-depth study of civil structures and irrigation systems at the Godavari and Bhavani Sagar Dams.',
      'Cultural and historical inquiry into the ancient Dravidian architecture of the Pariyoor Amman and Bannariamman temples.',
      'Interactive lectures on reservoir water management and regional agricultural impact.',
      'Field walks to examine river conservation and hydraulic turbine setups.'
    ],
    journeySummary: 'A balanced single-day trip bridging historical engineering with centuries-old spiritual architecture, ideal for young minds.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Heritage & Hydraulic Wonders',
        slots: [
          { time: '08:00 AM', title: 'Temple Architecture Visit', description: 'Visit Pariyoor Amman and Bannariamman temples. Study the intricate stone carvings, Gopurams, and historical inscriptions dating back centuries.' },
          { time: '11:30 AM', title: 'Godavari Dam Site Study', description: 'Arrive at the Godavari Dam site. Engineers will present the historical timeline of the dam construction and explain regional irrigation canal layouts.' },
          { time: '02:30 PM', title: 'Bhavani Sagar Reservoir Exploration', description: 'Explore the Bhavani Sagar Dam, one of the world\'s largest earthen dams. Walk the crest gates and learn about hydroelectric power generation.' },
          { time: '05:30 PM', title: 'Sunset Field Discussion', description: 'Enjoy group discussions on water conservation by the reservoir park before beginning the return journey.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80',
      'https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?w=800&q=80'
    ]
  },
  'kallanai': {
    overview: 'Take a step back into the glorious era of the Chola Dynasty. This tour focuses on Kallanai (The Grand Anicut), built by King Karikalan in the 2nd century AD, making it one of the oldest standing water-regulator structures in the world, combined with the magnificent heritage of Thanjavur.',
    highlights: [
      'First-hand observation of the ancient engineering marvel of Kallanai Dam, analyzing the diversion of Kaveri waters.',
      'Comprehensive heritage walk at the UNESCO World Heritage Brihadeeswarar (Big) Temple in Thanjavur.',
      'Cultural discovery of royal artifacts, ancient manuscripts, and painting styles at the Thanjavur Palace.',
      'Eco-science study of local biodiversity and recreational layout at Sivagangai Park.'
    ],
    journeySummary: 'An immersive historical expedition tracing ancient hydraulic engineering and the architectural golden age of Thanjavur.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Dynastic Architecture & Ancient Dams',
        slots: [
          { time: '08:30 AM', title: 'Kallanai Dam Civil Walk', description: 'Arrive at Kallanai. Stand on the ancient stone dam built 1,900 years ago and examine the genius design that diverts water into four streams.' },
          { time: '11:45 AM', title: 'Brihadeeswarar Temple Excursion', description: 'Explore the Chola masterpiece. Marvel at the giant monolithic Vimana tower and learn about the shadowless architectural engineering of the main temple.' },
          { time: '02:30 PM', title: 'Thanjavur Royal Palace Museum', description: 'Walk through the corridors of the Nayak and Maratha kings, studying ancient bronze idols, historical weaponry, and royal manuscripts.' },
          { time: '05:00 PM', title: 'Sivagangai Park & Reflections', description: 'Relax at Sivagangai Park, host a brief quiz for students summarizing the historical learnings, and board the bus home.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600100397990-24b32252c4b4?w=800&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?w=800&q=80',
      'https://images.unsplash.com/photo-1609137144813-176847847bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&q=80'
    ]
  },
  'ooty': {
    overview: 'The Queen of Hill Stations, nestled in the Blue Mountains (Nilgiris), offers a spectacular study of high-altitude botany, mountain ecosystems, and colonial history. Students will breathe the crisp mountain air and explore lush vegetation, gaining practical insight into horticulture and geographic sciences.',
    highlights: [
      'Visit the Government Botanical Garden to study exotic plant species, fossilized tree trunks, and high-altitude flora.',
      'Scenic climb to Doddabetta Peak, the highest point in South India, for a geographical viewing session.',
      'Field study at Ooty Lake focusing on freshwater systems and recreational tourism management.',
      'Horticultural exploration of the Sims Park in Coonoor, observing rare conifers and ancient trees.'
    ],
    journeySummary: 'A fresh, crisp mountain journey through Ooty and Coonoor, discovering botanical wonders and volcanic soil geographic layouts.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'The Blue Mountain Botany Tour',
        slots: [
          { time: '08:30 AM', title: 'Doddabetta Peak Ascent', description: 'Ascend to the highest summit of Nilgiris. Students will observe the regional terrain, tea terrace layouts, and cloud forest vegetation.' },
          { time: '11:00 AM', title: 'Botanical Garden Research Walk', description: 'Explore the 22-hectare garden, housing over a thousand species of plants, a 20-million-year-old fossil tree trunk, and Italian gardens.' },
          { time: '02:00 PM', title: 'Ooty Lake Boating & Tourism Study', description: 'Participate in recreational boating. Discuss the ecological preservation of mountain lakes and the local economy built on hill tourism.' },
          { time: '04:30 PM', title: 'Sims Park Coonoor Exploration', description: 'Walk through Coonoor\'s natural park, showcasing rare tree varieties imported from Japan, Australia, and South America.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80'
    ]
  },
  'kodaikanal': {
    overview: 'Kodaikanal, the "Princess of Hill Stations," is an educational playground of volcanic topography, pine plantations, and unique weather cycles. From structural geological formations like Pillar Rocks to misty pathways, this trip focuses on earth sciences and high-altitude weather patterns.',
    highlights: [
      'Geology field trip to the massive, vertical granite pillars known as Pillar Rocks.',
      'Scenic ecological stroll along Coaker\'s Walk to observe valley microclimates and mist movement.',
      'Field study on watershed management and lake pollution control at Kodaikanal Lake.',
      'Group discussions on dam safety and agricultural water supplies at the Vaigai Dam site.'
    ],
    journeySummary: 'A breathtaking high-altitude exploration of Kodaikanal\'s granite cliffs and lake valleys, descending to study water resource systems.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Valleys, Cliffs, and Earthen Dams',
        slots: [
          { time: '08:30 AM', title: 'Coaker\'s Walk & Pine Forest Study', description: 'Walk along the steep edge of Mount Nebo. Observe how clouds form and sweep over the valleys below, and examine pine tree soil retention.' },
          { time: '11:00 AM', title: 'Pillar Rocks Geological Visit', description: 'Examine the three towering granite rock pillars standing shoulder to shoulder, studying weathering, erosion, and rock formations.' },
          { time: '02:00 PM', title: 'Kodaikanal Lake Boating', description: 'Explore the star-shaped, man-made lake. Learn about water quality indices, conservation methods, and local aquatic life.' },
          { time: '05:00 PM', title: 'Vaigai Dam Engineering Overview', description: 'Stop at the foothills to inspect the Vaigai Dam, learning about river flow controls and the irrigation of Madurai and Dindigul districts.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
      'https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
      'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&q=80'
    ]
  },
  'chennai-pondicherry-pitchavaram': {
    overview: 'A magnificent coastal journey covering three iconic destinations along the Coromandel Coast. Students will explore Pitchavaram, the second largest mangrove forest in the world, the French heritage and town planning of Pondicherry, and the historical shore temples of Mahabalipuram before ending in Chennai.',
    highlights: [
      'Boat cruise through the dense, tangled roots of the Pitchavaram Mangrove Wetland ecosystem.',
      'Urban design and historical French colonial heritage tour of Pondicherry promenade.',
      'Detailed study of Pallava architectural achievements and rock-cut shrines at Mahabalipuram.',
      'Industrial and metropolitan exposure in the state capital of Chennai.'
    ],
    journeySummary: 'A premium 2-day itinerary bridging maritime ecology, dynastic architecture, and colonial town planning.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Mangroves & French Colonial Architecture',
        slots: [
          { time: '08:30 AM', title: 'Pitchavaram Mangrove Boat Study', description: 'Board boats to venture into the 1,100-hectare mangrove forest. Observe how aerial roots support coastal stability and view diverse bird species.' },
          { time: '02:00 PM', title: 'Pondicherry French Quarter Walk', description: 'Walk the streets of Pondicherry. Study the grids of French-style buildings, colonial monuments, and have interactive sessions about coastal trade.' },
          { time: '06:00 PM', title: 'Evening Promenade Gathering', description: 'Discuss the coastal currents and beach erosion at the Promenade beach, followed by checking into the hotel.' }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Monolithic Art & Metro Sightseeing',
        slots: [
          { time: '08:30 AM', title: 'Mahabalipuram Shore Temples', description: 'Analyze the rock-cut architecture, the Five Rathas, and Arjuna\'s Penance carved from single granite rocks.' },
          { time: '02:00 PM', title: 'Chennai Metropolitan Tour', description: 'Visit Chennai\'s key spots: Fort St. George or Marina Beach. Study the industrial development and logistics of Chennai Port.' },
          { time: '06:00 PM', title: 'Return Journey & Wrap-up', description: 'Engage in a reflection circle on the bus summarizing the geographical and cultural learnings of the trip.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80'
    ]
  },
  'coorg-and-chikmagalur-explorer': {
    overview: 'A premium 3-day exploration designed for college students into the heart of Karnataka\'s coffee country. Combining the majestic heritage of Mysore Palace with the volcanic mountain peaks of Chikmagalur and the forest wilderness of Coorg, this trip offers deep exposure in geography, history, and agricultural science.',
    highlights: [
      'Detailed guided tour of Mysore Palace to study Indo-Saracenic architectural aesthetics and regional history.',
      'Field study on forest ecology and elephant behavior at the Dubare Elephant Camp in Coorg.',
      'High-altitude peak trekking in Chikmagalur to understand mountain geographic lines and windward rainfall patterns.',
      'Horticultural tour of massive coffee estates to learn bean cultivation, processing, and fair-trade economics.'
    ],
    journeySummary: 'A comprehensive 3-day journey across Karnataka\'s rolling hills and palaces, exploring spice cultivation and dynastic history.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Mysore Heritage & Royal Abode',
        slots: [
          { time: '09:00 AM', title: 'Mysore Palace Historical Study', description: 'Tour the grand halls, checking out the blend of Hindu, Muslim, and Gothic architecture. Study the administrative history of the Wodeyar dynasty.' },
          { time: '02:30 PM', title: 'Chamundi Hills Geographic Study', description: 'Climb Chamundi Hills to observe the regional plain topography and the ancient monolith Nandi bull sculpture.' },
          { time: '06:00 PM', title: 'Brindavan Gardens Water Layouts', description: 'Study hydraulic engineering and park landscaping designs at the Krishnarajasagara Dam and gardens.' }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Coorg Wildlife & Tibetan Settlement',
        slots: [
          { time: '08:30 AM', title: 'Dubare Elephant Camp Eco-Tour', description: 'Interact with naturalists to learn about elephant rehabilitation, diet, and conservation inside the deciduous forest zones.' },
          { time: '01:30 PM', title: 'Golden Temple Bylakuppe Cultural Study', description: 'Visit one of the largest Tibetan settlements in India. Study Buddhist architecture, cultural preservation, and monastery layouts.' },
          { time: '05:00 PM', title: 'Abbey Falls Hydrology Walk', description: 'Trek to Abbey Falls to observe water currents and river course formations amidst private coffee and cardamom plantations.' }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: 'Chikmagalur Coffee Gardens & Peak Trek',
        slots: [
          { time: '08:00 AM', title: 'Coffee Plantation Agri-Walk', description: 'Meet with farmers to study the cultivation of Arabica and Robusta coffee, grafting methods, and estate shade-grown practices.' },
          { time: '12:00 PM', title: 'Chikmagalur High-Peak Ascent', description: 'Trek up the Western Ghats peak. Study altitudinal zonation of vegetation and local microclimates.' },
          { time: '04:30 PM', title: 'Reflection & Return Journey', description: 'Consolidate field notes in a group session before starting the drive back to the campus.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600100397990-24b32252c4b4?w=800&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?w=800&q=80',
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80'
    ]
  },
  'hyderabad': {
    overview: 'Explore the legacy of the Nizams in the historic metropolis of Hyderabad. A 3-day tour blending heavy civil engineering of ancient forts, cinematic media studies at Ramoji Film City, and cultural history at Charminar and Salar Jung Museum.',
    highlights: [
      'Acoustic and structural engineering study at the medieval Golconda Fort.',
      'Full-day study of media production, set design, and sound staging at Ramoji Film City.',
      'Examination of rare global art collections at the renowned Salar Jung Museum.',
      'Historical town-planning study of the iconic Charminar and surrounding 16th-century bazaars.'
    ],
    journeySummary: 'A high-impact 3-day educational tour combining media arts, medieval architecture, and royal heritage.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Nizam Architecture & Sound Acoustics',
        slots: [
          { time: '09:00 AM', title: 'Golconda Fort Acoustics Walk', description: 'Climb the fort. Test the ancient hand-clap signaling system that transmits sound to the top of the fort, studying medieval security design.' },
          { time: '03:00 PM', title: 'Qutb Shahi Tombs Heritage Walk', description: 'Study the unique blend of Persian and Deccan dome architecture, analyzing stone carving techniques.' },
          { time: '06:30 PM', title: 'Hussain Sagar Lake Boating', description: 'Observe the giant monolithic Buddha statue in the middle of the lake and discuss environmental conservation of urban water bodies.' }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Cinematography & Set Architecture',
        slots: [
          { time: '08:30 AM', title: 'Ramoji Film City Studio Tour', description: 'Spend the day analyzing how miniature modeling, chroma-keying, set building, and post-production techniques are carried out in a live movie studio.' },
          { time: '04:00 PM', title: 'Visual Special Effects Show', description: 'Attend live demonstrations showcasing stunt safety, wind machine simulation, and foley sound effects production.' },
          { time: '07:00 PM', title: 'Return & Dinner Gathering', description: 'Group discussion on media influence, script writing, and filmmaking techniques over dinner.' }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: 'Museum Collections & Historic Centre',
        slots: [
          { time: '09:00 AM', title: 'Salar Jung Museum Visit', description: 'Walk through global galleries containing thousands of art pieces, clock mechanisms, and the famous Veiled Rebecca sculpture.' },
          { time: '02:00 PM', title: 'Charminar Historical Study', description: 'Examine the 1591 monument, study the historical plague quarantine urban planning, and walk the vibrant Laad Bazaar.' },
          { time: '05:30 PM', title: 'Return Flight / Train boarding', description: 'Wrap up the tour, share learnings, and board the transit back to the campus.' }
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600100397990-24b32252c4b4?w=800&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?w=800&q=80'
    ]
  }
};

// Hydrated data structure for all 29 packages
export const EDUCATIONAL_PACKAGES: TourPackageDetails[] = BASE_PACKAGES.map(pkg => {
  const slug = getSlug(pkg.title);
  const override = PACKAGE_OVERRIDES[slug] || {};
  
  // Dynamic fallback generators
  const overview = override.overview || 
    `Experience a captivating educational adventure to ${pkg.title}. Designed for students to combine classroom theory with real-world insights, this journey through ${pkg.keyAttractions.join(', ')} offers rich exposure to local history, environment, and geography.`;
    
  const highlights = override.highlights || [
    `Interactive field study covering the unique geography of ${pkg.keyAttractions[0] || 'the region'}.`,
    `Hands-on cultural and heritage tour exploring ${pkg.keyAttractions[1] || 'local landmarks'}.`,
    `Group activities focused on nature preservation and eco-science at ${pkg.keyAttractions[2] || 'scenic vistas'}.`,
    `Project-based learning and field notes documentation designed for school and college curricula.`
  ];
  
  const journeySummary = override.journeySummary || 
    `A comprehensive study tour showcasing the major attractions of ${pkg.subtitle}, offering students a balanced blend of cultural history and scientific observation.`;
    
  // Dynamic Itinerary Builder based on category duration
  const days = pkg.category.includes('3 Days') ? 3 : (pkg.category.includes('2 Days') ? 2 : 1);
  const itinerary: DayItinerary[] = override.itinerary || Array.from({ length: days }).map((_, idx) => {
    const dayNum = idx + 1;
    const attractionsSlice = pkg.keyAttractions.slice(idx * 2, (idx * 2) + 2);
    const attraction1 = attractionsSlice[0] || pkg.keyAttractions[0] || 'Local Landmarks';
    const attraction2 = attractionsSlice[1] || pkg.keyAttractions[1] || 'Historical Centers';
    
    return {
      dayNumber: dayNum,
      dayTitle: days > 1 ? `Journey Exploration - Day ${dayNum}` : `Full Day Excursion`,
      slots: [
        { 
          time: '08:30 AM', 
          title: `Arrival & Morning Field Session`, 
          description: `Begin the day with an arrival at ${attraction1}. Conduct a structured walk-through, observing architectural elements or geographic terrains with coordinators.` 
        },
        { 
          time: '01:30 PM', 
          title: `Afternoon Hands-on Activities`, 
          description: `Proceed to ${attraction2}. Participate in interactive field studies, documenting flora, soil, water dynamics, or historical timelines in project folders.` 
        },
        { 
          time: '05:30 PM', 
          title: `Evening Reflection & Debrief`, 
          description: days > 1 && dayNum < days 
            ? `Gather at the local campsite or hotel for group reviews, summary quizzes, and dinner preparations.` 
            : `Conclude the tour with a structured feedback session and board the return transport back to the institution.`
        }
      ]
    };
  });
  
  const gallery = override.gallery || [
    'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
    'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80'
  ];

  return {
    slug,
    title: pkg.title,
    subtitle: pkg.subtitle,
    summary: pkg.summary,
    category: pkg.category,
    keyAttractions: pkg.keyAttractions,
    image: pkg.image,
    overview,
    highlights,
    journeySummary,
    itinerary,
    gallery
  };
});
