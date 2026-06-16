export const SITE_STATS = [
  { value: '50K+', label: 'Lives Impacted' },
  { value: '12K+', label: 'Donations Collected' },
  { value: '3,200+', label: 'Active Volunteers' },
  { value: '180+', label: 'Community Drives' },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Register & Choose a Cause',
    description: 'Create your free account and select Human Welfare, Animal Care, Home Support, or Environment programs.',
  },
  {
    step: '02',
    title: 'List Physical Resources',
    description: 'Submit items you wish to donate — clothes, books, food, building materials, or volunteer time.',
  },
  {
    step: '03',
    title: 'Schedule Pickup',
    description: 'Our field team coordinates collection from your address at a convenient time.',
  },
  {
    step: '04',
    title: 'Track & Deliver Impact',
    description: 'Follow your donation from collection to distribution and see real community outcomes.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Donor, Delhi',
    quote: 'HopeConnect made it effortless to donate winter clothes to families who needed them most. I could track every step.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Volunteer, Mumbai',
    quote: 'The volunteer network is well organized. I joined tree plantation drives and animal rescue support within days.',
  },
  {
    name: 'Anita Devi',
    role: 'Beneficiary, Rajasthan',
    quote: 'Through Home Support, we received roofing sheets and furniture. Our family finally has a safe place to live.',
  },
];

export const SUCCESS_STORIES = [
  {
    title: 'Winter Relief for 2,000 Families',
    category: 'Human Welfare',
    summary: 'Coordinated blanket and clothing drives across 14 districts during the coldest months.',
    impact: '2,000 families warmed',
    color: '#1B7A4B',
  },
  {
    title: 'Stray Animal Rescue Network',
    category: 'Animal Welfare',
    summary: 'Distributed 8 tons of animal feed and shelter materials to 40+ rescue centers.',
    impact: '1,200 animals cared for',
    color: '#D97706',
  },
  {
    title: 'Homes Rebuilt After Floods',
    category: 'Home Support',
    summary: 'Delivered cement, steel, and furniture kits to families rebuilding after monsoon damage.',
    impact: '85 homes restored',
    color: '#0284C7',
  },
  {
    title: 'Green Belt Restoration',
    category: 'Environment',
    summary: 'Volunteers planted 15,000 native trees along riverbanks and urban green corridors.',
    impact: '15,000 trees planted',
    color: '#059669',
  },
  {
    title: 'School Kit Distribution',
    category: 'Human Welfare',
    summary: 'Books, uniforms, and stationery reached 3,500 students in underserved communities.',
    impact: '3,500 students supported',
    color: '#1B7A4B',
  },
  {
    title: 'Community Clean Water Drive',
    category: 'Environment',
    summary: 'Rainwater harvesting units installed in 120 village schools and community centers.',
    impact: '120 installations',
    color: '#059669',
  },
];

export const GALLERY_ITEMS = [
  { title: 'Clothing Drive', category: 'Human Welfare', gradient: 'linear-gradient(135deg, #1B7A4B, #4CAF7A)' },
  { title: 'Animal Shelter Support', category: 'Animal Welfare', gradient: 'linear-gradient(135deg, #D97706, #FBBF24)' },
  { title: 'Home Rebuilding', category: 'Home Support', gradient: 'linear-gradient(135deg, #0284C7, #38BDF8)' },
  { title: 'Tree Plantation', category: 'Environment', gradient: 'linear-gradient(135deg, #059669, #34D399)' },
  { title: 'Medical Equipment', category: 'Human Welfare', gradient: 'linear-gradient(135deg, #145C38, #1B7A4B)' },
  { title: 'Volunteer Network', category: 'Community', gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)' },
  { title: 'Food Distribution', category: 'Human Welfare', gradient: 'linear-gradient(135deg, #B45309, #F59E0B)' },
  { title: 'Recycling Campaign', category: 'Environment', gradient: 'linear-gradient(135deg, #047857, #10B981)' },
];

export const FAQ_ITEMS = [
  {
    q: 'Does HopeConnect accept money donations?',
    a: 'No. HopeConnect follows a strict non-monetary policy. We accept physical resources and volunteer services only — no cash, UPI, bank transfers, or payment gateways.',
  },
  {
    q: 'What items can I donate?',
    a: 'Clothes, books, furniture, medical equipment, animal food, building materials, electronics in working condition, and household essentials. All items should be usable and safe.',
  },
  {
    q: 'How does pickup work?',
    a: 'After you submit a donation request, our team reviews it and schedules a pickup from your registered address. You can track status from your dashboard.',
  },
  {
    q: 'Can I volunteer without donating items?',
    a: 'Yes! Register as a customer and visit the Volunteer page to join collection drives, distribution support, and environmental campaigns.',
  },
  {
    q: 'Is registration free?',
    a: 'Yes, registration is completely free for donors, volunteers, and beneficiaries.',
  },
  {
    q: 'How do I know my donation reached someone?',
    a: 'Your dashboard shows real-time status updates: pending, scheduled, collected, and distributed.',
  },
];

export const PILLAR_PAGES = {
  human_welfare: {
    path: '/human-welfare',
    title: 'Human Welfare',
    subtitle: 'Supporting families with essential physical resources',
    gradient: 'linear-gradient(135deg, #145C38 0%, #1B7A4B 60%, #4CAF7A 100%)',
    color: '#1B7A4B',
    items: ['Clothes & Shoes', 'Books & Toys', 'Blankets & Bedding', 'Medical Equipment', 'Furniture', 'Baby Products', 'Household Essentials', 'Electronics'],
    programs: [
      { title: 'Winter Relief Program', desc: 'Seasonal clothing and blanket drives for vulnerable families.' },
      { title: 'Education Support', desc: 'Books, uniforms, and school kits for children in need.' },
      { title: 'Health & Mobility Aid', desc: 'Wheelchairs, crutches, and medical supplies for patients.' },
    ],
    impact: { families: '25,000+', items: '80,000+', districts: '42' },
  },
  animal_welfare: {
    path: '/animal-welfare',
    title: 'Animal Welfare',
    subtitle: 'Care, rescue, and shelter for animals in need',
    gradient: 'linear-gradient(135deg, #92400E 0%, #D97706 60%, #FBBF24 100%)',
    color: '#D97706',
    items: ['Animal Food', 'Cattle Feed', 'Pet Supplies', 'Veterinary Equipment', 'Shelter Materials', 'Rescue Equipment', 'Bird Feed', 'Animal Medicines'],
    programs: [
      { title: 'Feed the Strays', desc: 'Community feeding programs for street animals and birds.' },
      { title: 'Shelter Support', desc: 'Materials and supplies for animal rescue shelters.' },
      { title: 'Rescue Operations', desc: 'Equipment and volunteer coordination for emergency rescues.' },
    ],
    impact: { families: '40+ shelters', items: '15 tons feed', districts: '28' },
  },
  home_support: {
    path: '/home-support',
    title: 'Home Support',
    subtitle: 'Building safe homes for underprivileged families',
    gradient: 'linear-gradient(135deg, #0C4A6E 0%, #0284C7 60%, #38BDF8 100%)',
    color: '#0284C7',
    items: ['Building Materials', 'Roofing Sheets', 'Cement & Steel', 'Beds & Furniture', 'Kitchen Essentials', 'Home Setup Kits', 'Doors & Windows', 'Electrical Fixtures'],
    programs: [
      { title: 'Rebuild After Disaster', desc: 'Emergency housing materials for flood and storm victims.' },
      { title: 'First Home Initiative', desc: 'Complete home setup kits for newly settled families.' },
      { title: 'Kitchen & Living Upgrade', desc: 'Furniture and essentials for dignified living.' },
    ],
    impact: { families: '1,200+', items: '500+ homes', districts: '18' },
  },
  environment: {
    path: '/environment',
    title: 'Environment & Sustainability',
    subtitle: 'Protecting nature through community action',
    gradient: 'linear-gradient(135deg, #064E3B 0%, #059669 60%, #34D399 100%)',
    color: '#059669',
    items: ['Tree Saplings', 'Recycling Materials', 'Water Conservation Tools', 'Garden Supplies', 'Clean-up Equipment', 'Solar Accessories', 'Compost Units', 'Seed Banks'],
    programs: [
      { title: 'Green India Drive', desc: 'Large-scale tree plantation along highways and rivers.' },
      { title: 'Waste to Resource', desc: 'Community recycling and upcycling workshops.' },
      { title: 'Water for Tomorrow', desc: 'Rainwater harvesting and conservation projects.' },
    ],
    impact: { families: '15K trees', items: '120 projects', districts: '35' },
  },
};

export const TEAM_MEMBERS = [
  { name: 'Dr. Kavita Nair', role: 'Founder & Director', bio: '20 years in community development and NGO leadership.' },
  { name: 'Arjun Patel', role: 'Operations Head', bio: 'Leads logistics, pickup, and distribution across regions.' },
  { name: 'Sneha Reddy', role: 'Volunteer Coordinator', bio: 'Builds and manages our 3,000+ volunteer network.' },
  { name: 'Mohammed Khan', role: 'Animal Welfare Lead', bio: 'Partners with shelters and rescue organizations nationwide.' },
];

export const VOLUNTEER_ROLES = [
  { title: 'Collection Volunteer', desc: 'Help pick up donated items from donor locations.' },
  { title: 'Distribution Support', desc: 'Assist in sorting and delivering resources to beneficiaries.' },
  { title: 'Animal Care Helper', desc: 'Support feeding programs and shelter maintenance.' },
  { title: 'Environment Champion', desc: 'Lead tree plantation and cleanliness campaigns.' },
  { title: 'Community Ambassador', desc: 'Spread awareness and onboard new donors in your area.' },
  { title: 'Emergency Response', desc: 'Rapid deployment during floods, storms, and crises.' },
];
