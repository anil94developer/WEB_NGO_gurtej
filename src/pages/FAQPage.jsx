import { Box, Container, Typography } from '@mui/material';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import CTASection from '../components/layout/CTASection';
import { FAQ_ITEMS } from '../utils/siteContent';

export default function FAQPage() {
  return (
    <Box>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about donating physical resources and volunteering with HopeConnect."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQ' }]}
      />

      <Container maxWidth="md" sx={{ py: 6 }}>
        <SectionHeading title="Common Questions" subtitle="Can't find your answer? Contact us anytime." />
        {FAQ_ITEMS.map((item, index) => (
          <Box
            key={item.q}
            sx={{
              mb: 3,
              p: 3,
              bgcolor: 'background.paper',
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="subtitle1" fontWeight={700} color="primary.main" gutterBottom>
              {index + 1}. {item.q}
            </Typography>
            <Typography variant="body2" color="text.secondary" lineHeight={1.9}>
              {item.a}
            </Typography>
          </Box>
        ))}
      </Container>

      <CTASection
        title="Still Have Questions?"
        subtitle="Our support team is ready to help you get started with donations or volunteering."
        primaryLabel="Contact Support"
        primaryPath="/contact"
        secondaryLabel="How It Works"
        secondaryPath="/how-it-works"
      />
    </Box>
  );
}
