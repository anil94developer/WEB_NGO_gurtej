import { Box, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import CTASection from '../components/layout/CTASection';
import PolicyBanner from '../components/PolicyBanner';
import { HOW_IT_WORKS } from '../utils/siteContent';

const policies = [
  { title: 'Allowed', items: ['Physical items in usable condition', 'Volunteer time and services', 'Building & shelter materials', 'Animal food and medical supplies'], color: 'success' },
  { title: 'Not Allowed', items: ['Money or cash donations', 'UPI / bank transfers', 'Payment gateways', 'Cryptocurrency'], color: 'error' },
];

export default function HowItWorksPage() {
  return (
    <Box>
      <PageHero
        title="How It Works"
        subtitle="From registration to real impact — a simple, transparent four-step journey for physical resource donations."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'How It Works' }]}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <PolicyBanner />

        <Grid container spacing={4} mb={8}>
          {HOW_IT_WORKS.map((step) => (
            <Grid item xs={12} sm={6} md={3} key={step.step}>
              <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    left: 24,
                    bgcolor: 'secondary.main',
                    color: 'text.primary',
                    fontWeight: 800,
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                  }}
                >
                  Step {step.step}
                </Box>
                <CardContent sx={{ pt: 4, p: 3 }}>
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

        <SectionHeading title="Donation Policy" subtitle="HopeConnect is built exclusively for physical resource circulation." />
        <Grid container spacing={3} mb={4}>
          {policies.map((policy) => (
            <Grid item xs={12} md={6} key={policy.title}>
              <Card sx={{ height: '100%', borderTop: 4, borderColor: `${policy.color}.main` }}>
                <CardContent sx={{ p: 3 }}>
                  <Chip label={policy.title} color={policy.color} sx={{ mb: 2 }} />
                  {policy.items.map((item) => (
                    <Typography key={item} variant="body2" color="text.secondary" sx={{ mb: 1, pl: 1.5 }}>
                      • {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <CTASection
        title="Start Your Donation Journey"
        subtitle="Register in under two minutes and submit your first physical resource donation today."
        primaryLabel="Register Free"
        primaryPath="/register"
        secondaryLabel="View Programs"
        secondaryPath="/human-welfare"
      />
    </Box>
  );
}
