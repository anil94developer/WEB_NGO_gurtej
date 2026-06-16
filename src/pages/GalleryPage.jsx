import { Box, Container, Grid, Typography, Card } from '@mui/material';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import CTASection from '../components/layout/CTASection';
import { GALLERY_ITEMS } from '../utils/siteContent';

export default function GalleryPage() {
  return (
    <Box>
      <PageHero
        title="Media Gallery"
        subtitle="Moments of impact — from donation drives and volunteer campaigns to community celebrations."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SectionHeading
          title="Community in Action"
          subtitle="A visual journey through HopeConnect programs across India."
        />
        <Grid container spacing={3}>
          {GALLERY_ITEMS.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Card
                sx={{
                  height: 220,
                  background: item.gradient,
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: 2.5,
                  transition: '0.2s',
                  '&:hover': { transform: 'scale(1.03)' },
                }}
              >
                <PhotoLibraryIcon sx={{ opacity: 0.5, mb: 'auto' }} />
                <Typography variant="caption" sx={{ opacity: 0.85 }}>
                  {item.category}
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <CTASection
        title="Be in Our Next Gallery"
        subtitle="Join a volunteer drive or donate resources — your contribution becomes part of our shared story."
        primaryLabel="Get Involved"
        primaryPath="/volunteer"
        secondaryLabel="View Stories"
        secondaryPath="/stories"
      />
    </Box>
  );
}
