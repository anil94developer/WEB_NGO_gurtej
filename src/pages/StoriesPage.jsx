import { Box, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import CTASection from '../components/layout/CTASection';
import { SUCCESS_STORIES } from '../utils/siteContent';

export default function StoriesPage() {
  return (
    <Box>
      <PageHero
        title="Success Stories"
        subtitle="Real impact from real people — stories of hope powered by physical donations and volunteer action."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Stories' }]}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SectionHeading
          title="Impact Highlights"
          subtitle="Every story represents thousands of lives touched through non-monetary community support."
        />
        <Grid container spacing={3}>
          {SUCCESS_STORIES.map((story) => (
            <Grid item xs={12} sm={6} md={4} key={story.title}>
              <Card
                sx={{
                  height: '100%',
                  transition: '0.2s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                }}
              >
                <Box sx={{ height: 8, bgcolor: story.color }} />
                <CardContent sx={{ p: 3 }}>
                  <Chip
                    label={story.category}
                    size="small"
                    sx={{ bgcolor: `${story.color}18`, color: story.color, mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {story.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={2}>
                    {story.summary}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700} color="primary.main">
                    {story.impact}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <CTASection
        title="Write the Next Success Story"
        subtitle="Your donation or volunteer hours could be the reason a family sleeps warm tonight."
        primaryLabel="Donate Resources"
        primaryPath="/register"
        secondaryLabel="Share Your Story"
        secondaryPath="/contact"
      />
    </Box>
  );
}
