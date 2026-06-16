import PeopleIcon from '@mui/icons-material/People';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import NatureIcon from '@mui/icons-material/Nature';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RouteIcon from '@mui/icons-material/Route';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const MAIN_NAV = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Mission', path: '/mission' },
  {
    id: 'programs',
    label: 'Programs',
    mega: true,
    children: [
      {
        label: 'Human Welfare',
        path: '/human-welfare',
        icon: PeopleIcon,
        color: '#117A4B',
        desc: 'Clothes, books & household essentials',
      },
      {
        label: 'Animal Welfare',
        path: '/animal-welfare',
        icon: PetsIcon,
        color: '#D97706',
        desc: 'Food, shelter & rescue support',
      },
      {
        label: 'Home Support',
        path: '/home-support',
        icon: HomeIcon,
        color: '#0284C7',
        desc: 'Building materials & furniture',
      },
      {
        label: 'Environment',
        path: '/environment',
        icon: NatureIcon,
        color: '#059669',
        desc: 'Trees, recycling & green drives',
      },
    ],
  },
  {
    id: 'discover',
    label: 'Discover',
    children: [
      { label: 'How It Works', path: '/how-it-works', icon: RouteIcon },
      { label: 'Success Stories', path: '/stories', icon: AutoStoriesIcon },
      { label: 'Gallery', path: '/gallery', icon: PhotoLibraryIcon },
      { label: 'FAQ', path: '/faq', icon: HelpOutlineIcon },
    ],
  },
  { label: 'Volunteer', path: '/volunteer', icon: VolunteerActivismIcon },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_LINKS = {
  programs: [
    { label: 'Human Welfare', path: '/human-welfare' },
    { label: 'Animal Welfare', path: '/animal-welfare' },
    { label: 'Home Support', path: '/home-support' },
    { label: 'Environment', path: '/environment' },
  ],
  organization: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Mission', path: '/mission' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'How It Works', path: '/how-it-works' },
  ],
  resources: [
    { label: 'Success Stories', path: '/stories' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
  ],
};

// Backward compat
export const PUBLIC_NAV = MAIN_NAV;
