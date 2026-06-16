import { Box, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import CTASection from '../components/layout/CTASection';
import PolicyBanner from '../components/PolicyBanner';
import { IMPACT_PILLARS } from '../utils/constants';

const values = [
  { title: 'Transparency', desc: 'Every donation is tracked from pickup to distribution with full visibility.' },
  { title: 'Dignity', desc: 'We respect donors, volunteers, and beneficiaries equally in every interaction.' },
  { title: 'Sustainability', desc: 'Reuse, recycle, and restore — minimizing waste while maximizing impact.' },
  { title: 'Community First', desc: 'Local volunteers and branches lead programs tailored to regional needs.' },
];

const visionPoints = [
  'Zero monetary transactions — physical resources and services only',
  'Multi-branch NGO network with centralized coordination',
  'Real-time inventory and logistics tracking',
  'Verified beneficiary support with accountability',
  'AI-ready architecture for future scalability',
];

export default function MissionPage() {
  return (
    <Box>
      <PageHero
        title="Our Mission & Vision"
        subtitle="Creating a unified ecosystem where physical resources flow efficiently to those who need them most."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Mission' }]}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <PolicyBanner />

        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'white' }}>
              <CardContent sx={{ p: 4 }}>
                <Chip label="Mission" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', mb: 2 }} />
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Circulate Resources, Transform Lives
                </Typography>
                <Typography sx={{ opacity: 0.92, lineHeight: 1.9 }}>
                  HopeConnect exists to maximize the circulation of reusable physical resources — connecting donors,
                  volunteers, local branches, and beneficiaries through secure, scalable digital infrastructure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'secondary.main' }}>
              <CardContent sx={{ p: 4 }}>
                <Chip label="Vision" sx={{ bgcolor: 'rgba(0,0,0,0.08)', mb: 2 }} />
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  India&apos;s NGO Operating System
                </Typography>
                <Typography color="text.secondary" lineHeight={1.9}>
                  A complete platform integrating Human Welfare, Animal Care, Home Support, Environment,
                  and Volunteer Networks — enabling NGOs to deliver maximum social impact without financial complexity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <SectionHeading title="Core Values" subtitle="The principles that guide every program and partnership." />
        <Grid container spacing={3} mb={8}>
          {values.map((v) => (
            <Grid item xs={12} sm={6} md={3} key={v.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color="primary.main" gutterBottom>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                    {v.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <SectionHeading title="Impact Pillars" subtitle="Five interconnected areas of community development." />
        <Grid container spacing={3} mb={8}>
          {IMPACT_PILLARS.map((pillar) => (
            <Grid item xs={12} sm={6} key={pillar.title}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <SectionHeading title="Platform Vision" align="left" />
        <Card>
          <CardContent sx={{ p: 4 }}>
            {visionPoints.map((point) => (
              <Typography key={point} variant="body1" color="text.secondary" sx={{ mb: 1.5, pl: 2, borderLeft: '3px solid', borderColor: 'primary.main' }}>
                {point}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Container>

      <CTASection
        title="Help Us Build a Better Tomorrow"
        subtitle="Your physical donations and volunteer hours are the fuel for lasting community change."
        primaryLabel="Get Started"
        primaryPath="/register"
        secondaryLabel="Learn How It Works"
        secondaryPath="/how-it-works"
      />
    </Box>
  );
}
