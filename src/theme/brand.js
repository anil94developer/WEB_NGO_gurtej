export const brand = {
  green: {
    50: '#EDF7F1',
    100: '#D4EDE0',
    500: '#117A4B',
    600: '#0E633D',
    700: '#0A4D30',
    800: '#073820',
  },
  teal: {
    400: '#2DD4BF',
    500: '#0D9488',
    600: '#0F766E',
  },
  gold: {
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
  },
  coral: {
    400: '#FB923C',
    500: '#F97316',
  },
  slate: {
    50: '#F8FAF9',
    100: '#F1F5F3',
    500: '#64748B',
    700: '#334155',
    900: '#1A2E23',
  },
};

export const gradients = {
  hero: `linear-gradient(135deg, ${brand.green[800]} 0%, ${brand.green[500]} 50%, ${brand.teal[500]} 100%)`,
  heroSoft: `linear-gradient(160deg, ${brand.green[50]} 0%, #FFFFFF 60%, ${brand.slate[50]} 100%)`,
  cta: `linear-gradient(135deg, ${brand.green[700]} 0%, ${brand.green[500]} 55%, ${brand.teal[600]} 100%)`,
  navbar: 'rgba(255, 255, 255, 0.92)',
  footer: `linear-gradient(180deg, ${brand.green[800]} 0%, #052E1A 100%)`,
  button: `linear-gradient(135deg, ${brand.gold[500]} 0%, ${brand.coral[500]} 100%)`,
};

export const programColors = {
  human_welfare: '#117A4B',
  animal_welfare: '#D97706',
  home_support: '#0284C7',
  environment: '#059669',
};
