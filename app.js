/* ============================================
   WORKSPHERE — Application Logic
   Cooperative Service Marketplace Platform
   ============================================ */

// ============================================
// DATA STORE
// ============================================

const APP_DATA = {
  currentUser: null,
  currentRole: 'customer',
  currentLang: 'en',
  currentPage: 'dashboard',

  services: [
    { id: 'electrical', name: 'Electrical Work', icon: '⚡', desc: 'Wiring, repairs, installations, MCB, inverters', workers: 2450, color: '#fbbf24' },
    { id: 'plumbing', name: 'Plumbing', icon: '🔧', desc: 'Pipe fitting, leak repair, bathroom fixtures', workers: 1890, color: '#3b82f6' },
    { id: 'carpentry', name: 'Carpentry', icon: '🪚', desc: 'Furniture repair, woodwork, installations', workers: 1320, color: '#f97316' },
    { id: 'painting', name: 'Painting', icon: '🎨', desc: 'Interior, exterior, texture, waterproofing', workers: 1650, color: '#a78bfa' },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹', desc: 'Deep cleaning, kitchen, bathroom, office', workers: 2100, color: '#06d6a0' },
    { id: 'gardening', name: 'Gardening', icon: '🌿', desc: 'Lawn care, plant maintenance, landscaping', workers: 890, color: '#34d399' },
    { id: 'caregiving', name: 'Caregiving', icon: '❤️', desc: 'Elder care, child care, patient assistance', workers: 760, color: '#f472b6' },
    { id: 'driving', name: 'Driving', icon: '🚗', desc: 'Personal driver, delivery, outstation trips', workers: 1540, color: '#60a5fa' },
  ],

  workers: [
    { id: 1, name: 'Suresh Kumar', initials: 'SK', skill: 'Electrician', category: 'electrical', rating: 4.9, reviews: 234, jobs: 312, experience: '8 years', location: 'Koramangala', price: 499, badges: ['Certified', 'Top Rated', 'Insured'], society: 'Karnataka Labour Cooperative', verified: true },
    { id: 2, name: 'Priya Mehta', initials: 'PM', skill: 'Cleaner', category: 'cleaning', rating: 4.8, reviews: 189, jobs: 267, experience: '5 years', location: 'Indiranagar', price: 399, badges: ['Verified', 'Punctual'], society: 'Karnataka Labour Cooperative', verified: true },
    { id: 3, name: 'Ravi Tiwari', initials: 'RT', skill: 'Plumber', category: 'plumbing', rating: 4.7, reviews: 156, jobs: 198, experience: '10 years', location: 'Whitefield', price: 549, badges: ['Master Plumber', 'Insured'], society: 'Karnataka Labour Cooperative', verified: true },
    { id: 4, name: 'Meena Sundari', initials: 'MS', skill: 'Caregiver', category: 'caregiving', rating: 4.9, reviews: 98, jobs: 145, experience: '6 years', location: 'HSR Layout', price: 599, badges: ['Certified Nurse', 'Background Verified'], society: 'Tamil Nadu Workers Society', verified: true },
    { id: 5, name: 'Kumar Deshpande', initials: 'KD', skill: 'Carpenter', category: 'carpentry', rating: 4.6, reviews: 178, jobs: 245, experience: '12 years', location: 'Jayanagar', price: 549, badges: ['Master Craftsman', 'Insured'], society: 'Karnataka Labour Cooperative', verified: true },
    { id: 6, name: 'Anita Rao', initials: 'AR', skill: 'Painter', category: 'painting', rating: 4.8, reviews: 142, jobs: 198, experience: '7 years', location: 'Marathahalli', price: 449, badges: ['Texture Expert', 'Verified'], society: 'Karnataka Labour Cooperative', verified: true },
    { id: 7, name: 'Deepak Singh', initials: 'DS', skill: 'Driver', category: 'driving', rating: 4.7, reviews: 312, jobs: 456, experience: '9 years', location: 'Electronic City', price: 350, badges: ['Licensed', 'Safe Driver'], society: 'Maharashtra Labour Cooperative', verified: true },
    { id: 8, name: 'Lakshmi Nair', initials: 'LN', skill: 'Gardener', category: 'gardening', rating: 4.5, reviews: 87, jobs: 120, experience: '4 years', location: 'Banashankari', price: 349, badges: ['Plant Expert', 'Verified'], society: 'Kerala Workers Federation', verified: true },
    { id: 9, name: 'Arjun Patel', initials: 'AP', skill: 'Technician', category: 'electrical', rating: 4.8, reviews: 203, jobs: 278, experience: '6 years', location: 'Yelahanka', price: 599, badges: ['AC Specialist', 'Certified', 'Insured'], society: 'Karnataka Labour Cooperative', verified: true },
  ],

  bookings: [
    { id: 'WS-2026-78542', service: '⚡ Electrical Wiring', worker: 'Suresh Kumar', workerInitials: 'SK', date: '25 Sep 2026', status: 'in-progress', amount: '₹850' },
    { id: 'WS-2026-78541', service: '🧹 Deep Cleaning', worker: 'Priya Mehta', workerInitials: 'PM', date: '24 Sep 2026', status: 'completed', amount: '₹1,200' },
    { id: 'WS-2026-78540', service: '🔧 Pipe Repair', worker: 'Ravi Tiwari', workerInitials: 'RT', date: '23 Sep 2026', status: 'completed', amount: '₹549' },
    { id: 'WS-2026-78539', service: '🎨 Room Painting', worker: 'Anita Rao', workerInitials: 'AR', date: '22 Sep 2026', status: 'completed', amount: '₹3,500' },
    { id: 'WS-2026-78538', service: '🪚 Cabinet Repair', worker: 'Kumar Deshpande', workerInitials: 'KD', date: '20 Sep 2026', status: 'cancelled', amount: '₹800' },
    { id: 'WS-2026-78537', service: '❤️ Elder Care', worker: 'Meena Sundari', workerInitials: 'MS', date: '19 Sep 2026', status: 'completed', amount: '₹1,800' },
    { id: 'WS-2026-78536', service: '⚡ AC Service', worker: 'Arjun Patel', workerInitials: 'AP', date: '18 Sep 2026', status: 'pending', amount: '₹599' },
  ],

  reviews: [
    { user: 'Ananya Sharma', initials: 'AS', rating: 5, text: 'Suresh was extremely professional and fixed all the electrical issues in our apartment within 2 hours. Very fair pricing through the cooperative platform. Highly recommended!', date: '24 Sep 2026', service: 'Electrical Wiring' },
    { user: 'Vikram Reddy', initials: 'VR', rating: 5, text: 'Priya\'s deep cleaning service was outstanding. The house looks brand new! Love that WorkSphere ensures fair wages for workers while keeping prices reasonable.', date: '23 Sep 2026', service: 'Deep Cleaning' },
    { user: 'Sunita Patel', initials: 'SP', rating: 4, text: 'Ravi fixed our pipe leak quickly. He was punctual and professional. The cooperative verification gives me confidence in the workers.', date: '22 Sep 2026', service: 'Plumbing' },
    { user: 'Rajesh Nair', initials: 'RN', rating: 5, text: 'Kumar crafted a beautiful bookshelf. His 12 years of experience really shows. The cooperative model ensures quality craftsmen get fair compensation.', date: '21 Sep 2026', service: 'Carpentry' },
    { user: 'Meghna Das', initials: 'MD', rating: 5, text: 'Meena is an absolute gem for elder care. She takes care of my mother with so much patience and love. Thankful for WorkSphere connecting us!', date: '20 Sep 2026', service: 'Caregiving' },
  ],

  testimonials: [
    { name: 'Kavitha Rao', initials: 'KR', role: 'Homeowner, Bangalore', text: 'WorkSphere transformed how I get household help. Every worker is verified through their cooperative, giving me complete peace of mind. The prices are fair for both sides!', rating: 5 },
    { name: 'Arun Cooperative Secretary', initials: 'AC', role: 'Karnataka Labour Federation', text: 'Our workers now have a dignified digital platform. Fair wages, insurance, and regular work — WorkSphere has improved livelihoods of over 2,000 families in our cooperative.', rating: 5 },
    { name: 'Dr. Priyanka Gupta', initials: 'PG', role: 'Hospital Administrator', text: 'We hire caregivers and cleaners from WorkSphere for our hospital. The cooperative verification system and training programs ensure we get skilled, reliable workers every time.', rating: 5 },
  ],

  workersMgmt: [
    { name: 'Suresh Kumar', initials: 'SK', skill: 'Electrician', society: 'Karnataka Labour Coop', jobs: 312, rating: 4.9, status: 'verified' },
    { name: 'Priya Mehta', initials: 'PM', skill: 'Cleaner', society: 'Karnataka Labour Coop', jobs: 267, rating: 4.8, status: 'verified' },
    { name: 'Ravi Tiwari', initials: 'RT', skill: 'Plumber', society: 'Karnataka Labour Coop', jobs: 198, rating: 4.7, status: 'verified' },
    { name: 'Gopal Verma', initials: 'GV', skill: 'Painter', society: 'Maharashtra Labour Coop', jobs: 0, rating: 0, status: 'pending' },
    { name: 'Sita Devi', initials: 'SD', skill: 'Caregiver', society: 'Tamil Nadu Workers Soc', jobs: 0, rating: 0, status: 'pending' },
    { name: 'Mohan Das', initials: 'MD', skill: 'Carpenter', society: 'Kerala Workers Fed', jobs: 45, rating: 4.5, status: 'verified' },
    { name: 'Lakshmi Nair', initials: 'LN', skill: 'Gardener', society: 'Kerala Workers Fed', jobs: 120, rating: 4.5, status: 'verified' },
  ]
};

// ============================================
// MULTILINGUAL TRANSLATIONS
// ============================================

const TRANSLATIONS = {
  en: {
    nav_services: 'Services', nav_how: 'How It Works', nav_about: 'About', nav_contact: 'Contact',
    nav_login: 'Log In', nav_signup: 'Join Now',
    hero_badge: 'Cooperative-Owned Platform',
    hero_title_1: 'Skilled Workers,', hero_title_2: 'Trusted Services,', hero_title_3: 'Fair Wages',
    hero_desc: 'Connecting verified workers from Labour Cooperative Federations with households and institutions. Fair wages, worker welfare, and quality service — all on one platform.',
    hero_book: '📋 Book a Service', hero_join: '👷 Join as Worker',
    stat_workers: 'Verified Workers', stat_services: 'Services Completed', stat_rating: 'Average Rating',
    services_label: 'Our Services', services_title: 'Every Service Your Home Needs',
    services_desc: 'From emergency repairs to daily household help — all provided by verified cooperative workers',
    emergency_title: 'Need Emergency Service?', emergency_desc: 'Get immediate help from nearby workers — available 24/7 for urgent repairs and emergencies',
    emergency_btn: '⚡ Emergency Booking',
    how_label: 'Simple Process', how_title: 'How WorkSphere Works', how_desc: 'Book verified cooperative workers in just four simple steps',
    step1_title: 'Choose Service', step1_desc: 'Select from our wide range of household and community services',
    step2_title: 'Pick a Worker', step2_desc: 'Browse verified worker profiles with ratings and certifications',
    step3_title: 'Schedule & Pay', step3_desc: 'Book a convenient time and pay securely through digital payment',
    step4_title: 'Get Service', step4_desc: 'Verified worker arrives at your door — rate and review after completion',
    footer_desc: 'A cooperative-owned digital service marketplace empowering skilled workers with fair wages, welfare, and dignity.',
  },
  hi: {
    nav_services: 'सेवाएं', nav_how: 'कैसे काम करता है', nav_about: 'हमारे बारे में', nav_contact: 'संपर्क',
    nav_login: 'लॉग इन', nav_signup: 'अभी जुड़ें',
    hero_badge: 'सहकारी-स्वामित्व वाला प्लेटफॉर्म',
    hero_title_1: 'कुशल कर्मचारी,', hero_title_2: 'विश्वसनीय सेवाएं,', hero_title_3: 'उचित वेतन',
    hero_desc: 'श्रम सहकारी संघों से सत्यापित कर्मचारियों को घरों और संस्थानों से जोड़ना। उचित वेतन, कर्मचारी कल्याण और गुणवत्ता सेवा — सब एक प्लेटफॉर्म पर।',
    hero_book: '📋 सेवा बुक करें', hero_join: '👷 कर्मचारी बनें',
    stat_workers: 'सत्यापित कर्मचारी', stat_services: 'सेवाएं पूरी', stat_rating: 'औसत रेटिंग',
    services_label: 'हमारी सेवाएं', services_title: 'आपके घर की हर ज़रूरत',
    services_desc: 'आपातकालीन मरम्मत से लेकर दैनिक घरेलू सहायता तक — सभी सत्यापित सहकारी कर्मचारियों द्वारा',
    emergency_title: 'आपातकालीन सेवा चाहिए?', emergency_desc: 'निकटतम उपलब्ध कर्मचारी से तुरंत सहायता प्राप्त करें — 24/7 उपलब्ध',
    emergency_btn: '⚡ आपातकालीन बुकिंग',
    how_label: 'सरल प्रक्रिया', how_title: 'वर्कस्फीयर कैसे काम करता है', how_desc: 'चार सरल चरणों में सत्यापित सहकारी कर्मचारियों को बुक करें',
    step1_title: 'सेवा चुनें', step1_desc: 'हमारी विविध घरेलू और सामुदायिक सेवाओं में से चुनें',
    step2_title: 'कर्मचारी चुनें', step2_desc: 'रेटिंग और प्रमाणपत्रों के साथ सत्यापित कर्मचारी प्रोफाइल ब्राउज़ करें',
    step3_title: 'शेड्यूल और भुगतान', step3_desc: 'सुविधाजनक समय बुक करें और डिजिटल भुगतान से सुरक्षित भुगतान करें',
    step4_title: 'सेवा प्राप्त करें', step4_desc: 'सत्यापित कर्मचारी आपके दरवाज़े पर आता है — पूरा होने के बाद रेट और रिव्यू करें',
    footer_desc: 'एक सहकारी-स्वामित्व वाला डिजिटल सेवा बाज़ार जो कुशल कर्मचारियों को उचित वेतन, कल्याण और सम्मान से सशक्त बनाता है।',
  },
  ta: {
    nav_services: 'சேவைகள்', nav_how: 'எப்படி வேலை செய்கிறது', nav_about: 'எங்களை பற்றி', nav_contact: 'தொடர்பு',
    nav_login: 'உள்நுழைய', nav_signup: 'இப்போது சேரவும்',
    hero_badge: 'கூட்டுறவு சொந்த தளம்',
    hero_title_1: 'திறமையான தொழிலாளர்கள்,', hero_title_2: 'நம்பகமான சேவைகள்,', hero_title_3: 'நியாயமான ஊதியம்',
    hero_desc: 'தொழிலாளர் கூட்டுறவு கூட்டமைப்புகளின் சரிபார்க்கப்பட்ட தொழிலாளர்களை வீடுகள் மற்றும் நிறுவனங்களுடன் இணைக்கிறது.',
    hero_book: '📋 சேவையை பதிவு செய்யுங்கள்', hero_join: '👷 தொழிலாளராக சேரவும்',
    services_label: 'எங்கள் சேவைகள்',
    emergency_btn: '⚡ அவசர பதிவு',
  },
  te: {
    nav_services: 'సేవలు', nav_how: 'ఎలా పని చేస్తుంది', nav_about: 'మా గురించి', nav_contact: 'సంప్రదించండి',
    nav_login: 'లాగిన్', nav_signup: 'ఇప్పుడు చేరండి',
    hero_badge: 'సహకార-యాజమాన్య వేదిక',
    hero_title_1: 'నైపుణ్య కార్మికులు,', hero_title_2: 'విశ్వసనీయ సేవలు,', hero_title_3: 'న్యాయమైన వేతనాలు',
    hero_book: '📋 సేవ బుక్ చేయండి', hero_join: '👷 కార్మికుడిగా చేరండి',
    emergency_btn: '⚡ అత్యవసర బుకింగ్',
  },
  kn: {
    nav_services: 'ಸೇವೆಗಳು', nav_how: 'ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', nav_about: 'ನಮ್ಮ ಬಗ್ಗೆ', nav_contact: 'ಸಂಪರ್ಕಿಸಿ',
    nav_login: 'ಲಾಗಿನ್', nav_signup: 'ಈಗ ಸೇರಿ',
    hero_badge: 'ಸಹಕಾರ-ಸ್ವಾಮ್ಯದ ವೇದಿಕೆ',
    hero_title_1: 'ನುರಿತ ಕಾರ್ಮಿಕರು,', hero_title_2: 'ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆಗಳು,', hero_title_3: 'ನ್ಯಾಯಯುತ ವೇತನ',
    hero_book: '📋 ಸೇವೆ ಬುಕ್ ಮಾಡಿ', hero_join: '👷 ಕಾರ್ಮಿಕರಾಗಿ ಸೇರಿ',
    emergency_btn: '⚡ ತುರ್ತು ಬುಕಿಂಗ್',
  },
  bn: {
    nav_services: 'সেবাসমূহ', nav_how: 'কিভাবে কাজ করে', nav_about: 'আমাদের সম্পর্কে', nav_contact: 'যোগাযোগ',
    nav_login: 'লগ ইন', nav_signup: 'এখন যোগ দিন',
    hero_badge: 'সমবায়-মালিকানাধ প্ল্যাটফর্ম',
    hero_title_1: 'দক্ষ কর্মী,', hero_title_2: 'বিশ্বস্ত সেবা,', hero_title_3: 'ন্যায্য মজুরি',
    hero_book: '📋 সেবা বুক করুন', hero_join: '👷 কর্মী হিসেবে যোগ দিন',
    emergency_btn: '⚡ জরুরি বুকিং',
  },
  mr: {
    nav_services: 'सेवा', nav_how: 'कसे काम करते', nav_about: 'आमच्याबद्दल', nav_contact: 'संपर्क',
    nav_login: 'लॉग इन', nav_signup: 'आता सामील व्हा',
    hero_badge: 'सहकारी-मालकीचे प्लॅटफॉर्म',
    hero_title_1: 'कुशल कामगार,', hero_title_2: 'विश्वसनीय सेवा,', hero_title_3: 'योग्य वेतन',
    hero_book: '📋 सेवा बुक करा', hero_join: '👷 कामगार म्हणून सामील व्हा',
    emergency_btn: '⚡ आपत्कालीन बुकिंग',
  },
};


// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  renderServiceCards();
  renderTestimonials();
  initScrollAnimations();
  initNavScroll();
  initLanguageSwitcher();
  setupEventListeners();

  // Set minimum date to today for booking
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
    dateInput.value = new Date().toISOString().split('T')[0];
  }
});


// ============================================
// PARTICLES ANIMATION
// ============================================

function initParticles() {
  const mesh = document.getElementById('bgMesh');
  if (!mesh) return;
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.background = Math.random() > 0.5
      ? 'rgba(124, 58, 237, 0.4)'
      : 'rgba(6, 214, 160, 0.4)';
    particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    mesh.appendChild(particle);
  }
}


// ============================================
// RENDER FUNCTIONS
// ============================================

function renderServiceCards() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = APP_DATA.services.map(svc => `
    <div class="service-card animate-on-scroll" onclick="handleServiceClick('${svc.id}')">
      <div class="service-card-icon">${svc.icon}</div>
      <h3>${svc.name}</h3>
      <p>${svc.desc}</p>
      <div class="worker-count">👷 ${svc.workers.toLocaleString()} workers available</div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  track.innerHTML = APP_DATA.testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <div class="testimonial-text">"${t.text}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initials}</div>
        <div>
          <h4>${t.name}</h4>
          <p>${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderDashboardCards() {
  const container = document.getElementById('dashboardCards');
  if (!container) return;

  const cards = APP_DATA.currentRole === 'admin' ? [
    { icon: '🏛️', iconClass: 'purple', value: '24', label: 'Cooperative Societies', trend: '↑ 3 new', trendClass: 'up' },
    { icon: '👷', iconClass: 'green', value: '12,547', label: 'Total Workers', trend: '↑ 156 this month', trendClass: 'up' },
    { icon: '📋', iconClass: 'blue', value: '1,842', label: 'Active Bookings', trend: '↑ 24%', trendClass: 'up' },
    { icon: '💰', iconClass: 'yellow', value: '₹24.5L', label: 'Monthly Revenue', trend: '↑ 18%', trendClass: 'up' },
  ] : APP_DATA.currentRole === 'worker' ? [
    { icon: '💼', iconClass: 'purple', value: '4', label: 'Today\'s Jobs', trend: '↑ Active', trendClass: 'up' },
    { icon: '💰', iconClass: 'green', value: '₹2,450', label: 'Today\'s Earnings', trend: '↑ 18%', trendClass: 'up' },
    { icon: '⭐', iconClass: 'yellow', value: '4.9', label: 'Rating', trend: 'Top 5%', trendClass: 'up' },
    { icon: '📋', iconClass: 'blue', value: '156', label: 'Total Jobs', trend: '↑ 12 this week', trendClass: 'up' },
  ] : [
    { icon: '📋', iconClass: 'purple', value: '7', label: 'Total Bookings', trend: '↑ 3 this month', trendClass: 'up' },
    { icon: '✅', iconClass: 'green', value: '5', label: 'Completed', trend: '100% satisfaction', trendClass: 'up' },
    { icon: '⏳', iconClass: 'yellow', value: '1', label: 'In Progress', trend: 'On schedule', trendClass: 'up' },
    { icon: '💰', iconClass: 'blue', value: '₹8,999', label: 'Total Spent', trend: '↓ 15% saved', trendClass: 'up' },
  ];

  container.innerHTML = cards.map(card => `
    <div class="dash-card">
      <div class="dash-card-header">
        <div class="dash-card-icon ${card.iconClass}">${card.icon}</div>
      </div>
      <div class="value">${card.value}</div>
      <div class="label">${card.label}</div>
      <div class="trend ${card.trendClass}">${card.trend}</div>
    </div>
  `).join('');
}

function renderRecentBookings() {
  const body = document.getElementById('recentBookingsBody');
  if (!body) return;
  body.innerHTML = APP_DATA.bookings.slice(0, 5).map(b => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>${b.service}</td>
      <td>
        <div class="worker-cell">
          <div class="worker-cell-avatar">${b.workerInitials}</div>
          <div><h4>${b.worker}</h4></div>
        </div>
      </td>
      <td>${b.date}</td>
      <td><span class="status-badge ${b.status}">${b.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span></td>
      <td><strong>${b.amount}</strong></td>
    </tr>
  `).join('');
}

function renderAllBookings() {
  const body = document.getElementById('allBookingsBody');
  if (!body) return;
  body.innerHTML = APP_DATA.bookings.map(b => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>${b.service}</td>
      <td>
        <div class="worker-cell">
          <div class="worker-cell-avatar">${b.workerInitials}</div>
          <div><h4>${b.worker}</h4></div>
        </div>
      </td>
      <td>${b.date}</td>
      <td><span class="status-badge ${b.status}">${b.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span></td>
      <td><strong>${b.amount}</strong></td>
      <td>
        ${b.status === 'completed' ? '<button class="btn btn-sm btn-outline" onclick="showToast(\'Review submitted!\',\'success\')">⭐ Review</button>' : ''}
        ${b.status === 'in-progress' ? '<button class="btn btn-sm btn-primary">Track</button>' : ''}
        ${b.status === 'pending' ? '<button class="btn btn-sm btn-secondary" onclick="showToast(\'Booking cancelled\',\'info\')">Cancel</button>' : ''}
      </td>
    </tr>
  `).join('');
}

function renderWorkerCards(filter = 'all') {
  const grid = document.getElementById('workerCardsGrid');
  if (!grid) return;

  const workers = filter === 'all'
    ? APP_DATA.workers
    : APP_DATA.workers.filter(w => w.category === filter);

  grid.innerHTML = workers.map(w => `
    <div class="worker-card" onclick="openBookingForWorker('${w.name}')">
      <div class="worker-card-top">
        <div class="worker-card-avatar">${w.initials}</div>
        <div class="worker-card-info">
          <h3>${w.name} ${w.verified ? '✓' : ''}</h3>
          <div class="skill-tag">${w.skill}</div>
        </div>
      </div>
      <div class="worker-card-meta">
        <span>⭐ ${w.rating} (${w.reviews})</span>
        <span>📋 ${w.jobs} jobs</span>
        <span>📅 ${w.experience}</span>
      </div>
      <div class="worker-card-skills">
        ${w.badges.map(b => `<span class="skill-badge">${b}</span>`).join('')}
      </div>
      <div class="worker-card-footer">
        <div class="worker-price">₹${w.price} <span>/visit</span></div>
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openBookingForWorker('${w.name}')">Book Now</button>
      </div>
    </div>
  `).join('');
}

function renderWorkersMgmt() {
  const body = document.getElementById('workersMgmtBody');
  if (!body) return;
  body.innerHTML = APP_DATA.workersMgmt.map(w => `
    <tr>
      <td>
        <div class="worker-cell">
          <div class="worker-cell-avatar">${w.initials}</div>
          <div><h4>${w.name}</h4></div>
        </div>
      </td>
      <td>${w.skill}</td>
      <td>${w.society}</td>
      <td>${w.jobs}</td>
      <td>${w.rating > 0 ? `<span class="rating">⭐ ${w.rating}</span>` : '—'}</td>
      <td><span class="status-badge ${w.status}">${w.status.charAt(0).toUpperCase() + w.status.slice(1)}</span></td>
      <td>
        ${w.status === 'pending'
          ? `<button class="btn btn-sm btn-primary" onclick="verifyWorker(this,'${w.name}')">Verify</button>`
          : '<button class="btn btn-sm btn-outline">View</button>'
        }
      </td>
    </tr>
  `).join('');
}

function renderReviews() {
  const list = document.getElementById('reviewsList');
  if (!list) return;
  list.innerHTML = APP_DATA.reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-user">
          <div class="review-avatar">${r.initials}</div>
          <div>
            <h4>${r.user}</h4>
            <p>${r.date} • ${r.service}</p>
          </div>
        </div>
        <div class="review-rating">
          ${'<span class="star">★</span>'.repeat(r.rating)}${'<span class="star empty">★</span>'.repeat(5 - r.rating)}
        </div>
      </div>
      <p class="review-text">${r.text}</p>
    </div>
  `).join('');
}


// ============================================
// CHARTS (Canvas-based)
// ============================================

function drawBookingsChart() {
  const canvas = document.getElementById('bookingsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;

  const data = [42, 58, 35, 72, 65, 89, 78, 95, 82, 110, 98, 125];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const max = Math.max(...data) * 1.2;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '11px Inter';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(max - (max / 4) * i), padding.left - 10, y + 4);
  }

  // Labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '11px Inter';
  ctx.textAlign = 'center';
  data.forEach((_, i) => {
    const x = padding.left + (chartW / (data.length - 1)) * i;
    ctx.fillText(labels[i], x, h - 10);
  });

  // Area gradient
  const grad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
  grad.addColorStop(0, 'rgba(124, 58, 237, 0.3)');
  grad.addColorStop(1, 'rgba(124, 58, 237, 0)');

  ctx.beginPath();
  ctx.moveTo(padding.left, h - padding.bottom);
  data.forEach((val, i) => {
    const x = padding.left + (chartW / (data.length - 1)) * i;
    const y = padding.top + chartH - (val / max) * chartH;
    if (i === 0) ctx.lineTo(x, y);
    else {
      const prevX = padding.left + (chartW / (data.length - 1)) * (i - 1);
      const prevY = padding.top + chartH - (data[i - 1] / max) * chartH;
      const cpx = (prevX + x) / 2;
      ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
    }
  });
  ctx.lineTo(padding.left + chartW, h - padding.bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  const lineGrad = ctx.createLinearGradient(padding.left, 0, w - padding.right, 0);
  lineGrad.addColorStop(0, '#7c3aed');
  lineGrad.addColorStop(1, '#06d6a0');
  ctx.beginPath();
  data.forEach((val, i) => {
    const x = padding.left + (chartW / (data.length - 1)) * i;
    const y = padding.top + chartH - (val / max) * chartH;
    if (i === 0) ctx.moveTo(x, y);
    else {
      const prevX = padding.left + (chartW / (data.length - 1)) * (i - 1);
      const prevY = padding.top + chartH - (data[i - 1] / max) * chartH;
      const cpx = (prevX + x) / 2;
      ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
    }
  });
  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Dots
  data.forEach((val, i) => {
    const x = padding.left + (chartW / (data.length - 1)) * i;
    const y = padding.top + chartH - (val / max) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#7c3aed';
    ctx.fill();
    ctx.strokeStyle = '#0c1225';
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function drawDistributionChart() {
  const canvas = document.getElementById('distributionChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;

  const data = [
    { label: 'Electrical', value: 28, color: '#fbbf24' },
    { label: 'Plumbing', value: 20, color: '#3b82f6' },
    { label: 'Cleaning', value: 22, color: '#06d6a0' },
    { label: 'Carpentry', value: 12, color: '#f97316' },
    { label: 'Painting', value: 10, color: '#a78bfa' },
    { label: 'Others', value: 8, color: '#f472b6' },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const cx = w / 2, cy = h / 2 - 10;
  const outerR = Math.min(w, h) / 2 - 40;
  const innerR = outerR * 0.55;
  let startAngle = -Math.PI / 2;

  data.forEach(d => {
    const sliceAngle = (d.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, outerR, startAngle, startAngle + sliceAngle);
    ctx.arc(cx, cy, innerR, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    startAngle += sliceAngle;
  });

  // Center text
  ctx.fillStyle = '#f1f5f9';
  ctx.font = 'bold 20px Outfit';
  ctx.textAlign = 'center';
  ctx.fillText(total + '%', cx, cy);
  ctx.font = '11px Inter';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Distribution', cx, cy + 18);

  // Legend
  const legendY = h - 25;
  const legendSpacing = w / data.length;
  data.forEach((d, i) => {
    const lx = legendSpacing * i + legendSpacing / 2;
    ctx.beginPath();
    ctx.arc(lx - 20, legendY, 4, 0, Math.PI * 2);
    ctx.fillStyle = d.color;
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Inter';
    ctx.textAlign = 'left';
    ctx.fillText(d.label, lx - 12, legendY + 3);
  });
}

function drawEarningsChart() {
  const canvas = document.getElementById('earningsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;

  const data = [12500, 18200, 22400, 19800, 28600, 32100, 35400, 29800, 38200, 42500, 45800, 48750];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const max = Math.max(...data) * 1.15;
  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const barW = chartW / data.length - 8;

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '11px Inter';
    ctx.textAlign = 'right';
    ctx.fillText('₹' + Math.round((max - (max / 4) * i) / 1000) + 'K', padding.left - 8, y + 4);
  }

  // Bars
  data.forEach((val, i) => {
    const x = padding.left + (chartW / data.length) * i + 4;
    const barH = (val / max) * chartH;
    const y = padding.top + chartH - barH;

    const grad = ctx.createLinearGradient(x, y, x, y + barH);
    grad.addColorStop(0, '#06d6a0');
    grad.addColorStop(1, 'rgba(6, 214, 160, 0.3)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
    ctx.fill();

    // Label
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '11px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(labels[i], x + barW / 2, h - 10);
  });
}

function drawAdminCharts() {
  // Revenue chart
  const revCanvas = document.getElementById('adminRevenueChart');
  if (revCanvas) {
    const ctx = revCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = revCanvas.getBoundingClientRect();
    revCanvas.width = rect.width * dpr;
    revCanvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;

    const data = [8.2, 9.5, 11.2, 14.8, 16.5, 18.2, 19.8, 21.4, 22.8, 24.5];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const max = Math.max(...data) * 1.2;
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // Area
    const grad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    grad.addColorStop(0, 'rgba(6, 214, 160, 0.3)');
    grad.addColorStop(1, 'rgba(6, 214, 160, 0)');

    ctx.beginPath();
    ctx.moveTo(padding.left, h - padding.bottom);
    data.forEach((val, i) => {
      const x = padding.left + (chartW / (data.length - 1)) * i;
      const y = padding.top + chartH - (val / max) * chartH;
      ctx.lineTo(x, y);
    });
    ctx.lineTo(padding.left + chartW, h - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    data.forEach((val, i) => {
      const x = padding.left + (chartW / (data.length - 1)) * i;
      const y = padding.top + chartH - (val / max) * chartH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#06d6a0';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Labels
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '11px Inter';
    ctx.textAlign = 'center';
    data.forEach((_, i) => {
      const x = padding.left + (chartW / (data.length - 1)) * i;
      ctx.fillText(labels[i], x, h - 10);
    });

    // Y-axis
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();
      ctx.fillText('₹' + (max - (max / 4) * i).toFixed(0) + 'L', padding.left - 8, y + 4);
    }
  }

  // Worker allocation donut
  const wCanvas = document.getElementById('adminWorkerChart');
  if (wCanvas) {
    drawDistributionChart.call(null); // reuse logic with different canvas
    const ctx = wCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = wCanvas.getBoundingClientRect();
    wCanvas.width = rect.width * dpr;
    wCanvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, hh = rect.height;

    const data = [
      { label: 'Electricians', value: 2450, color: '#fbbf24' },
      { label: 'Plumbers', value: 1890, color: '#3b82f6' },
      { label: 'Cleaners', value: 2100, color: '#06d6a0' },
      { label: 'Carpenters', value: 1320, color: '#f97316' },
      { label: 'Others', value: 4787, color: '#a78bfa' },
    ];
    const total = data.reduce((s, d) => s + d.value, 0);
    const cx = w / 2, cy = hh / 2 - 15;
    const oR = Math.min(w, hh) / 2 - 40;
    const iR = oR * 0.55;
    let sa = -Math.PI / 2;
    data.forEach(d => {
      const angle = (d.value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(cx, cy, oR, sa, sa + angle);
      ctx.arc(cx, cy, iR, sa + angle, sa, true);
      ctx.closePath();
      ctx.fillStyle = d.color;
      ctx.fill();
      sa += angle;
    });
    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 18px Outfit';
    ctx.textAlign = 'center';
    ctx.fillText(total.toLocaleString(), cx, cy);
    ctx.font = '11px Inter';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Workers', cx, cy + 18);
  }
}

function drawForecastChart() {
  const canvas = document.getElementById('forecastChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const sets = [
    { label: 'Electrical', data: [45, 52, 48, 62, 58, 75, 82], color: '#fbbf24' },
    { label: 'Plumbing', data: [32, 35, 38, 42, 40, 45, 48], color: '#3b82f6' },
    { label: 'Cleaning', data: [28, 30, 32, 35, 38, 42, 45], color: '#06d6a0' },
  ];
  const max = 100;
  const padding = { top: 20, right: 20, bottom: 40, left: 40 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartH / 4) * i;
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
  }

  // Labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '11px Inter';
  ctx.textAlign = 'center';
  days.forEach((d, i) => {
    const x = padding.left + (chartW / (days.length - 1)) * i;
    ctx.fillText(d, x, h - 10);
  });

  // Lines
  sets.forEach(set => {
    ctx.beginPath();
    set.data.forEach((val, i) => {
      const x = padding.left + (chartW / (set.data.length - 1)) * i;
      const y = padding.top + chartH - (val / max) * chartH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = set.color;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Dots
    set.data.forEach((val, i) => {
      const x = padding.left + (chartW / (set.data.length - 1)) * i;
      const y = padding.top + chartH - (val / max) * chartH;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = set.color;
      ctx.fill();
    });
  });

  // Dashed forecast lines (last 3 days)
  sets.forEach(set => {
    ctx.beginPath();
    for (let i = 4; i < set.data.length; i++) {
      const x = padding.left + (chartW / (set.data.length - 1)) * i;
      const y = padding.top + chartH - (set.data[i] / max) * chartH;
      if (i === 4) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = set.color;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);
  });
}

function drawReportsChart() {
  const canvas = document.getElementById('reportsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;

  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const revenue = [12.5, 15.2, 17.8, 19.5, 22.1, 24.5];
  const bookings = [4200, 5100, 6300, 7100, 7800, 8542];
  const maxRev = 30;
  const maxBook = 10000;
  const padding = { top: 20, right: 60, bottom: 40, left: 60 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const barW = chartW / months.length - 20;

  // Bars (revenue)
  months.forEach((_, i) => {
    const x = padding.left + (chartW / months.length) * i + 10;
    const barH = (revenue[i] / maxRev) * chartH;
    const y = padding.top + chartH - barH;
    const grad = ctx.createLinearGradient(x, y, x, y + barH);
    grad.addColorStop(0, 'rgba(124, 58, 237, 0.8)');
    grad.addColorStop(1, 'rgba(124, 58, 237, 0.2)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
    ctx.fill();
  });

  // Line (bookings)
  ctx.beginPath();
  months.forEach((_, i) => {
    const x = padding.left + (chartW / months.length) * i + 10 + barW / 2;
    const y = padding.top + chartH - (bookings[i] / maxBook) * chartH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#06d6a0';
  ctx.lineWidth = 3;
  ctx.stroke();

  months.forEach((_, i) => {
    const x = padding.left + (chartW / months.length) * i + 10 + barW / 2;
    const y = padding.top + chartH - (bookings[i] / maxBook) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#06d6a0';
    ctx.fill();
  });

  // Labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '11px Inter';
  ctx.textAlign = 'center';
  months.forEach((m, i) => {
    const x = padding.left + (chartW / months.length) * i + 10 + barW / 2;
    ctx.fillText(m, x, h - 10);
  });
}


// ============================================
// EVENT HANDLERS
// ============================================

function setupEventListeners() {
  // Login/Signup buttons
  document.getElementById('btnLogin')?.addEventListener('click', () => openModal('authModal', 'login'));
  document.getElementById('btnSignup')?.addEventListener('click', () => openModal('authModal', 'signup'));
  document.getElementById('heroBookBtn')?.addEventListener('click', () => openModal('authModal', 'login'));
  document.getElementById('heroJoinBtn')?.addEventListener('click', () => openModal('authModal', 'signup'));
  document.getElementById('emergencyLandingBtn')?.addEventListener('click', () => openModal('authModal', 'login'));

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // Search
  document.getElementById('globalSearch')?.addEventListener('input', handleGlobalSearch);
}

function handleServiceClick(serviceId) {
  if (!APP_DATA.currentUser) {
    openModal('authModal', 'login');
    return;
  }
  switchPage('services');
  setTimeout(() => filterServices(null, serviceId), 100);
}

function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase();
  if (query.length > 2) {
    showToast(`Searching for "${query}"...`, 'info');
  }
}


// ============================================
// AUTHENTICATION
// ============================================

function switchAuthTab(tab) {
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('signupForm').classList.toggle('hidden', tab !== 'signup');
}

function selectRole(role) {
  APP_DATA.currentRole = role;
  document.querySelectorAll('.role-option').forEach(el => {
    el.classList.toggle('selected', el.dataset.role === role);
  });
}

function handleLogin() {
  const phone = document.getElementById('loginPhone')?.value;
  const pass = document.getElementById('loginPassword')?.value;
  if (!phone || !pass) {
    showToast('Please fill in all fields', 'error');
    return;
  }
  handleDemoLogin('customer');
}

function handleSignup() {
  const name = document.getElementById('signupName')?.value;
  const phone = document.getElementById('signupPhone')?.value;
  const pass = document.getElementById('signupPassword')?.value;
  if (!name || !phone || !pass) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  handleDemoLogin(APP_DATA.currentRole, name);
}

function handleDemoLogin(role, name) {
  const names = { customer: 'Rajesh S.', worker: 'Suresh Kumar', admin: 'Federation Admin' };
  const initials = { customer: 'RS', worker: 'SK', admin: 'FA' };
  const roleLabels = { customer: 'Customer', worker: 'Service Provider', admin: 'Federation Admin' };

  APP_DATA.currentUser = name || names[role];
  APP_DATA.currentRole = role;

  // Update UI
  document.getElementById('userName').textContent = APP_DATA.currentUser;
  document.getElementById('userRole').textContent = roleLabels[role];
  document.getElementById('userAvatar').textContent = name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : initials[role];

  // Show/hide nav sections based on role
  document.getElementById('workerNavSection').style.display = (role === 'worker' || role === 'admin') ? 'block' : 'none';
  document.getElementById('adminNavSection').style.display = role === 'admin' ? 'block' : 'none';

  closeModal('authModal');
  enterApp();
  showToast(`Welcome, ${APP_DATA.currentUser}! Logged in as ${roleLabels[role]}.`, 'success');
}

function handleLogout() {
  APP_DATA.currentUser = null;
  document.getElementById('appLayout').classList.remove('active');
  document.getElementById('landingPage').classList.remove('hidden-page');
  showToast('Logged out successfully', 'info');
}

function enterApp() {
  document.getElementById('landingPage').classList.add('hidden-page');
  document.getElementById('appLayout').classList.add('active');

  // Render app content
  renderDashboardCards();
  renderRecentBookings();
  renderAllBookings();
  renderWorkerCards();
  renderWorkersMgmt();
  renderReviews();

  // Draw charts after a small delay for canvas sizing
  setTimeout(() => {
    drawBookingsChart();
    drawDistributionChart();
    drawEarningsChart();
    drawAdminCharts();
    drawForecastChart();
    drawReportsChart();
  }, 200);

  switchPage('dashboard');
}


// ============================================
// NAVIGATION
// ============================================

function switchPage(page) {
  APP_DATA.currentPage = page;

  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  // Update page views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.toggle('active', view.id === `page-${page}`);
  });

  // Update title
  const titles = {
    'dashboard': '📊 Dashboard',
    'services': '🔍 Browse Services',
    'bookings': '📋 My Bookings',
    'emergency': '🚨 Emergency Booking',
    'worker-dashboard': '💼 My Work',
    'earnings': '💰 Earnings',
    'welfare': '🛡️ Welfare & Insurance',
    'registration': '📝 Worker Registration',
    'admin': '🏛️ Federation Admin',
    'workers-mgmt': '👥 Workers Management',
    'ai-forecast': '🤖 AI Demand Forecasting',
    'reports': '📈 Reports & Analytics',
    'ratings': '⭐ Reviews & Ratings',
    'map-view': '🗺️ Geo-Location Map',
  };
  document.getElementById('pageTitle').textContent = titles[page] || 'Dashboard';

  // Redraw charts if needed
  setTimeout(() => {
    if (page === 'dashboard') { drawBookingsChart(); drawDistributionChart(); }
    if (page === 'earnings') drawEarningsChart();
    if (page === 'admin') drawAdminCharts();
    if (page === 'ai-forecast') drawForecastChart();
    if (page === 'reports') drawReportsChart();
  }, 100);
}


// ============================================
// BOOKING FLOW
// ============================================

function openBookingModal() {
  resetBookingSteps();
  openModal('bookingModal');
}

function openBookingForWorker(workerName) {
  resetBookingSteps();
  openModal('bookingModal');
  showToast(`Booking with ${workerName}`, 'info');
}

function nextBookingStep(step) {
  // Hide all steps
  document.querySelectorAll('#bookingModal .form-step').forEach(el => el.classList.remove('active'));
  document.getElementById(`bookingStep${step}`)?.classList.add('active');

  // Update progress dots
  document.querySelectorAll('#bookingProgress .step-dot').forEach(dot => {
    const dotStep = parseInt(dot.dataset.step);
    dot.classList.remove('active', 'completed');
    if (dotStep === step) dot.classList.add('active');
    else if (dotStep < step) dot.classList.add('completed');
  });
  document.querySelectorAll('#bookingProgress .step-line').forEach((line, i) => {
    line.classList.toggle('completed', i < step - 1);
  });
}

function resetBookingSteps() {
  nextBookingStep(1);
}

function selectPayment(el) {
  document.querySelectorAll('.payment-method').forEach(pm => pm.classList.remove('selected'));
  el.classList.add('selected');
}


// ============================================
// REGISTRATION FLOW
// ============================================

function nextRegStep(step) {
  document.querySelectorAll('#page-registration .form-step').forEach(el => el.classList.remove('active'));
  document.getElementById(`regStep${step}`)?.classList.add('active');

  document.querySelectorAll('#regProgress .step-dot').forEach(dot => {
    const dotStep = parseInt(dot.dataset.step);
    dot.classList.remove('active', 'completed');
    if (dotStep === step) dot.classList.add('active');
    else if (dotStep < step) dot.classList.add('completed');
  });
  document.querySelectorAll('#regProgress .step-line').forEach((line, i) => {
    line.classList.toggle('completed', i < step - 1);
  });
}

function submitRegistration() {
  showToast('🎉 Registration submitted successfully! Your cooperative society will verify your application within 48 hours.', 'success');
  setTimeout(() => switchPage('worker-dashboard'), 1500);
}


// ============================================
// EMERGENCY BOOKING
// ============================================

function bookEmergency(type) {
  const services = {
    electrical: '⚡ Electrical Emergency',
    plumbing: '🔧 Plumbing Emergency',
    locksmith: '🔑 Locksmith',
    appliance: '🔌 Appliance Repair'
  };
  showToast(`🚨 Emergency booking placed for ${services[type]}! Nearest worker being notified...`, 'success');
  setTimeout(() => {
    showToast('👷 Worker Suresh K. accepted! ETA: 12 minutes', 'success');
  }, 2000);
}


// ============================================
// SERVICE FILTERS
// ============================================

function filterServices(el, category) {
  if (el) {
    document.querySelectorAll('#serviceFilters .filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }
  renderWorkerCards(category);
}

function setChartPeriod(el, period) {
  el.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  drawBookingsChart();
}


// ============================================
// ADMIN ACTIONS
// ============================================

function verifyWorker(btn, name) {
  btn.textContent = '✓ Verified';
  btn.className = 'btn btn-sm btn-outline';
  btn.style.color = 'var(--accent-secondary)';
  btn.style.borderColor = 'var(--accent-secondary)';
  btn.disabled = true;

  const row = btn.closest('tr');
  const statusCell = row.querySelector('.status-badge');
  if (statusCell) {
    statusCell.className = 'status-badge verified';
    statusCell.textContent = 'Verified';
  }
  showToast(`✅ ${name} has been verified successfully!`, 'success');
}


// ============================================
// MODALS
// ============================================

function openModal(id, tab) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    if (tab && id === 'authModal') switchAuthTab(tab);
  }
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('active');
}


// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-message">${message}</span>
    <span class="toast-close" onclick="this.parentElement.remove()">✕</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}


// ============================================
// LANGUAGE SWITCHER
// ============================================

function initLanguageSwitcher() {
  // Landing page lang toggle
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');

  langToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });

  // App lang toggle
  const appLangToggle = document.getElementById('appLangToggle');
  const appLangDropdown = document.getElementById('appLangDropdown');

  appLangToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    appLangDropdown.classList.toggle('active');
  });

  // Close on outside click
  document.addEventListener('click', () => {
    langDropdown?.classList.remove('active');
    appLangDropdown?.classList.remove('active');
  });

  // Language option clicks
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      switchLanguage(lang);
    });
  });
}

function switchLanguage(lang) {
  APP_DATA.currentLang = lang;

  const langNames = { en: 'EN', hi: 'हि', ta: 'த', te: 'తె', kn: 'ಕ', bn: 'বা', mr: 'म' };
  document.getElementById('currentLang').textContent = langNames[lang] || 'EN';
  document.getElementById('appCurrentLang').textContent = langNames[lang] || 'EN';

  // Update active state
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Apply translations
  const translations = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) el.textContent = translations[key];
  });

  // Close dropdowns
  document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('active'));
  showToast(`Language changed to ${document.querySelector(`.lang-option[data-lang="${lang}"]`)?.textContent || 'English'}`, 'info');
}


// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

function initNavScroll() {
  const nav = document.getElementById('landingNav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Counter animation for stats
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) statObserver.observe(statsSection);
}

function animateCounters() {
  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function update(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString() + (target >= 1000 ? '+' : '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}


// ============================================
// WINDOW RESIZE HANDLER
// ============================================

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (APP_DATA.currentUser) {
      const page = APP_DATA.currentPage;
      if (page === 'dashboard') { drawBookingsChart(); drawDistributionChart(); }
      if (page === 'earnings') drawEarningsChart();
      if (page === 'admin') drawAdminCharts();
      if (page === 'ai-forecast') drawForecastChart();
      if (page === 'reports') drawReportsChart();
    }
  }, 250);
});
