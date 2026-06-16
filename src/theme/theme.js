import { createTheme, alpha } from '@mui/material/styles';
import { brand } from './brand';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.green[500],
      light: brand.teal[500],
      dark: brand.green[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: brand.gold[500],
      light: brand.gold[400],
      dark: brand.gold[600],
      contrastText: brand.slate[900],
    },
    background: {
      default: brand.slate[50],
      paper: '#FFFFFF',
    },
    text: {
      primary: brand.slate[900],
      secondary: brand.slate[500],
    },
    success: { main: '#059669' },
    warning: { main: brand.gold[600] },
    error: { main: '#DC2626' },
    info: { main: '#0284C7' },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
  shadows: [
    'none',
    '0 1px 3px rgba(10, 77, 48, 0.06)',
    '0 4px 14px rgba(10, 77, 48, 0.08)',
    '0 8px 24px rgba(10, 77, 48, 0.10)',
    '0 12px 32px rgba(10, 77, 48, 0.12)',
    ...Array(20).fill('0 16px 40px rgba(10, 77, 48, 0.14)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
        '::selection': {
          background: alpha(brand.green[500], 0.25),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 22px',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${brand.green[500]}, ${brand.teal[500]})`,
          '&:hover': {
            background: `linear-gradient(135deg, ${brand.green[600]}, ${brand.teal[600]})`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${brand.gold[500]}, ${brand.coral[500]})`,
          color: '#fff',
          '&:hover': {
            background: `linear-gradient(135deg, ${brand.gold[600]}, ${brand.coral[400]})`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(17, 122, 75, 0.07)',
          border: `1px solid ${alpha(brand.green[500], 0.08)}`,
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
  },
});

export default theme;
