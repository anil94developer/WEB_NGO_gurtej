export const DONATION_CATEGORIES = [
  { value: 'human_welfare', label: 'Human Welfare', icon: 'People', color: '#1B7A4B' },
  { value: 'animal_welfare', label: 'Animal Welfare', icon: 'Pets', color: '#D97706' },
  { value: 'home_support', label: 'Home Support', icon: 'Home', color: '#0284C7' },
  { value: 'environment', label: 'Environment', icon: 'Eco', color: '#059669' },
];

export const DONATION_STATUS = {
  pending: { label: 'Pending', color: 'warning' },
  scheduled: { label: 'Scheduled', color: 'info' },
  collected: { label: 'Collected', color: 'primary' },
  distributed: { label: 'Distributed', color: 'success' },
  cancelled: { label: 'Cancelled', color: 'error' },
};

export const IMPACT_PILLARS = [
  {
    title: 'Human Welfare',
    description: 'Clothes, books, medical equipment, and household essentials for families in need.',
  },
  {
    title: 'Animal Welfare',
    description: 'Food, shelter materials, and rescue equipment for animal care programs.',
  },
  {
    title: 'Home Support',
    description: 'Building materials and furniture to help families establish safe living spaces.',
  },
  {
    title: 'Environment',
    description: 'Tree plantation, recycling, and sustainability volunteer campaigns.',
  },
];

export const POLICY_NOTICE =
  'HopeConnect accepts physical resource donations only. No monetary donations, payments, or financial transactions are permitted on this platform.';
