import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  Avatar,
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PeopleIcon from '@mui/icons-material/People';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import NatureIcon from '@mui/icons-material/Nature';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link as RouterLink } from 'react-router-dom';
import PolicyBanner from '../components/PolicyBanner';
import SectionHeading from '../components/layout/SectionHeading';
import StatsRow from '../components/layout/StatsRow';
import CTASection from '../components/layout/CTASection';
import { IMPACT_PILLARS } from '../utils/constants';
import { SITE_STATS, HOW_IT_WORKS, TESTIMONIALS, PILLAR_PAGES } from '../utils/siteContent';
import { gradients, brand } from '../theme/brand';
import { alpha } from '@mui/material/styles';
import { useAuth } from '../context/AuthContext';

const pillarIcons = [PeopleIcon, PetsIcon, HomeIcon, NatureIcon];
const pillarPaths = ['/human-welfare', '/animal-welfare', '/home-support', '/environment'];

export default function HomePage() {
  const { user } = useAuth();

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background: gradients.hero,
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.05)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip label="NGO Operating System" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', mb: 2 }} />
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2.25rem', md: '3.5rem' }, lineHeight: 1.15 }}>
                HopeConnect NGO Platform
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.95, mb: 4, fontWeight: 400, lineHeight: 1.8, maxWidth: 560 }}>
                India&apos;s unified platform for physical resource donations, volunteer coordination,
                and community development — with zero monetary transactions.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={RouterLink}
                  to={user ? (user.role === 'admin' ? '/admin' : '/donate') : '/register'}
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  {user ? 'Go to Dashboard' : 'Start Donating'}
                </Button>
                <Button
                  component={RouterLink}
                  to="/volunteer"
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  Become a Volunteer
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.12)', borderRadius: 4, p: 4, textAlign: 'center', backdropFilter: 'blur(8px)' }}>
                <VolunteerActivismIcon sx={{ fontSize: 80, mb: 2 }} />
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Physical Resources Only
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Clothes, food, building materials, medical equipment, and volunteer services — no money, no payments.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ background: gradients.cta, mt: -2 }}>
        <StatsRow stats={SITE_STATS} light />
      </Box>

      {/* Policy */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <PolicyBanner />
      </Container>

      {/* Pillars */}
      <Box sx={{ bgcolor: 'background.default', py: 6 }}>
        <Container maxWidth="lg">
          <SectionHeading
            title="Five Core Impact Pillars"
            subtitle="HopeConnect integrates human welfare, animal care, home support, environment, and volunteer networks into one platform."
          />
          <Grid container spacing={3}>
            {IMPACT_PILLARS.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <Grid item xs={12} sm={6} md={3} key={pillar.title}>
                    <Card
                      component={RouterLink}
                      to={pillarPaths[index]}
                      sx={{
                        height: '100%',
                        textDecoration: 'none',
                        transition: '0.25s',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 12px 32px ${alpha(brand.green[500], 0.15)}`,
                          borderColor: alpha(brand.green[500], 0.25),
                        },
                      }}
                    >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ width: 52, height: 52, borderRadius: 2, bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <Icon />
                      </Box>
                      <Typography variant="h6" fontWeight={700} color="text.primary" gutterBottom>
                        {pillar.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={2}>
                        {pillar.description}
                      </Typography>
                      <Typography variant="body2" color="primary.main" fontWeight={600}>
                        Learn more →
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeading title="How It Works" subtitle="Four simple steps from registration to real community impact." />
        <Grid container spacing={3} mb={3}>
          {HOW_IT_WORKS.map((step) => (
            <Grid item xs={12} sm={6} md={3} key={step.step}>
              <Card sx={{ height: '100%', borderTop: 4, borderColor: 'secondary.main' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" fontWeight={800} color="primary.main" gutterBottom>
                    {step.step}
                  </Typography>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button component={RouterLink} to="/how-it-works" endIcon={<ArrowForwardIcon />}>
            View Full Process
          </Button>
        </Box>
      </Container>

      {/* Programs highlight */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <SectionHeading title="Our Programs" subtitle="Dedicated portals for every area of social impact." />
          <Grid container spacing={3}>
            {Object.values(PILLAR_PAGES).map((pillar) => (
              <Grid item xs={12} md={6} key={pillar.title}>
                <Card
                  component={RouterLink}
                  to={pillar.path}
                  sx={{
                    display: 'flex',
                    textDecoration: 'none',
                    overflow: 'hidden',
                    transition: '0.2s',
                    '&:hover': { transform: 'scale(1.02)' },
                  }}
                >
                  <Box sx={{ width: 8, bgcolor: pillar.color, flexShrink: 0 }} />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight={700} color="text.primary" gutterBottom>
                      {pillar.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                      {pillar.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeading title="Voices of Hope" subtitle="Stories from donors, volunteers, and beneficiaries." />
        <Grid container spacing={3} mb={3}>
          {TESTIMONIALS.map((t) => (
            <Grid item xs={12} md={4} key={t.name}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <FormatQuoteIcon sx={{ color: 'primary.light', fontSize: 40, mb: 1 }} />
                  <Typography variant="body1" color="text.secondary" lineHeight={1.9} mb={3} fontStyle="italic">
                    &ldquo;{t.quote}&rdquo;
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main' }}>{t.name.charAt(0)}</Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>{t.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{t.role}</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button component={RouterLink} to="/stories" endIcon={<ArrowForwardIcon />}>
            Read Success Stories
          </Button>
        </Box>
      </Container>

      {/* Trust banner */}
      <Box sx={{ background: gradients.cta, color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Trusted by NGOs, Volunteers & Communities
              </Typography>
              <Typography sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                Enterprise-grade security, role-based access, audit logging, and full donation tracking —
                built for organizations that demand accountability and scale.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign={{ xs: 'left', md: 'right' }}>
              <Button component={RouterLink} to="/about" variant="contained" color="secondary" size="large">
                About HopeConnect
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CTASection
        title="Ready to Create Impact?"
        subtitle="Register free, donate physical resources, or join our volunteer network — every action matters."
        primaryLabel="Register Now"
        primaryPath="/register"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </Box>
  );
}
