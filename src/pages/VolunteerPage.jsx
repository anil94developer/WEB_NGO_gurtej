import { Box, Container, Grid, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import CTASection from '../components/layout/CTASection';
import { VOLUNTEER_ROLES } from '../utils/siteContent';

const benefits = [
  'Flexible schedules — volunteer on weekends or evenings',
  'Training and onboarding for every role',
  'Certificate of community service',
  'Join local branches near your city',
  'Emergency response deployment opportunities',
  'Network with 3,000+ changemakers',
];

export default function VolunteerPage() {
  return (
    <Box>
      <PageHero
        title="Volunteer Network"
        subtitle="Join India's growing community of volunteers collecting, distributing, and caring — no money required, just your time and heart."
        gradient="linear-gradient(135deg, #4C1D95 0%, #7C3AED 60%, #A78BFA 100%)"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Volunteer' }]}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center" mb={8}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
              }}
            >
              <GroupsIcon sx={{ fontSize: 80, mb: 2 }} />
              <Typography variant="h3" fontWeight={800}>
                3,200+
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                Active Volunteers Nationwide
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <SectionHeading title="Why Volunteer?" align="left" />
            <Stack spacing={1.5}>
              {benefits.map((b) => (
                <Typography key={b} variant="body1" color="text.secondary" sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'primary.main' }}>
                  {b}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <SectionHeading title="Volunteer Roles" subtitle="Choose a role that matches your skills, schedule, and passion." />
        <Grid container spacing={3} mb={6}>
          {VOLUNTEER_ROLES.map((role) => (
            <Grid item xs={12} sm={6} md={4} key={role.title}>
              <Card sx={{ height: '100%', transition: '0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom color="primary.main">
                    {role.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                    {role.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center">
          <Button component={RouterLink} to="/register" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
            Register to Volunteer
          </Button>
        </Box>
      </Container>

      <CTASection
        title="Your Time Can Change Everything"
        subtitle="One weekend of volunteering can feed dozens of animals, plant hundreds of trees, or deliver essentials to families in need."
        primaryLabel="Join Now"
        primaryPath="/register"
        secondaryLabel="Contact Coordinator"
        secondaryPath="/contact"
      />
    </Box>
  );
}
