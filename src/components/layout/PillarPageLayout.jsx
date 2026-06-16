import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from './PageHero';
import SectionHeading from './SectionHeading';
import StatsRow from './StatsRow';
import CTASection from './CTASection';

export default function PillarPageLayout({ data }) {
  const impactStats = [
    { value: data.impact.families, label: 'Communities Served' },
    { value: data.impact.items, label: 'Resources Delivered' },
    { value: data.impact.districts, label: 'Districts Covered' },
    { value: '100%', label: 'Non-Monetary' },
  ];

  return (
    <Box>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        gradient={data.gradient}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: data.title }]}
      />

      <StatsRow stats={impactStats} />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SectionHeading
          title="What You Can Donate"
          subtitle="All donations are physical resources — no money, payments, or financial transactions."
        />
        <Grid container spacing={2} mb={6}>
          {data.items.map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item}>
              <Card sx={{ height: '100%', borderLeft: `4px solid ${data.color}` }}>
                <CardContent sx={{ py: 2 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleIcon sx={{ color: data.color, fontSize: 20 }} />
                    <Typography variant="body2" fontWeight={600}>
                      {item}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <SectionHeading title="Active Programs" subtitle="Structured initiatives delivering measurable community impact." />
        <Grid container spacing={3} mb={6}>
          {data.programs.map((program) => (
            <Grid item xs={12} md={4} key={program.title}>
              <Card sx={{ height: '100%', transition: '0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Chip label={data.title} size="small" sx={{ bgcolor: `${data.color}18`, color: data.color, mb: 2 }} />
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                    {program.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center">
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ bgcolor: data.color, '&:hover': { bgcolor: data.color, filter: 'brightness(0.9)' } }}
          >
            Donate to {data.title}
          </Button>
        </Box>
      </Container>

      <CTASection
        title="Ready to Make a Difference?"
        subtitle="Join thousands of donors and volunteers building stronger communities through physical resource sharing."
        primaryLabel="Start Donating"
        primaryPath="/register"
        secondaryLabel="Become a Volunteer"
        secondaryPath="/volunteer"
      />
    </Box>
  );
}
