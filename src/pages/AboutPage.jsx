import { Box, Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import CTASection from '../components/layout/CTASection';
import { TEAM_MEMBERS } from '../utils/siteContent';
import PolicyBanner from '../components/PolicyBanner';

export default function AboutPage() {
  return (
    <Box>
      <PageHero
        title="About HopeConnect"
        subtitle="A next-generation NGO Operating System connecting donors, volunteers, NGOs, and beneficiaries through one trusted digital network."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <PolicyBanner />

        <Grid container spacing={6} alignItems="center" mb={8}>
          <Grid item xs={12} md={6}>
            <SectionHeading title="Our Story" align="left" />
            <Typography variant="body1" color="text.secondary" paragraph lineHeight={1.9}>
              HopeConnect was founded with a simple belief: communities already have the resources to help each other —
              they just need a trusted platform to connect, coordinate, and deliver impact at scale.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph lineHeight={1.9}>
              Today we operate across human welfare, animal care, home support, and environmental sustainability —
              always through physical donations and volunteer action, never through money.
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
              Our enterprise-grade platform helps NGOs manage inventory, pickups, volunteers, and beneficiaries
              with transparency and accountability at every step.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 4,
                background: 'linear-gradient(135deg, #145C38, #4CAF7A)',
                p: 5,
                color: 'white',
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Since 2018
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                Building India&apos;s largest non-monetary donation ecosystem
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <SectionHeading title="Leadership Team" subtitle="Dedicated professionals driving social impact every day." />
        <Grid container spacing={3} mb={4}>
          {TEAM_MEMBERS.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar sx={{ width: 72, height: 72, mx: 'auto', mb: 2, bgcolor: 'primary.main', fontSize: 28 }}>
                    {member.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h6" fontWeight={700}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={600} gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <CTASection
        title="Be Part of Our Mission"
        subtitle="Whether you donate items, volunteer your time, or spread the word — every action creates lasting change."
        primaryLabel="Join HopeConnect"
        primaryPath="/register"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </Box>
  );
}
