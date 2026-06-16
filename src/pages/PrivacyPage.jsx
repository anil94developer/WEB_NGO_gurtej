import { Box, Container, Typography } from '@mui/material';
import PageHero from '../components/layout/PageHero';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect name, email, phone number, and donation details when you register. This information is used solely to coordinate pickups, manage donations, and communicate about your account.',
  },
  {
    title: 'How We Use Your Data',
    content: 'Your data is used for donation coordination, volunteer management, and platform security. We never sell personal information to third parties. Session data is stored securely in our database.',
  },
  {
    title: 'Non-Monetary Policy',
    content: 'HopeConnect does not process, store, or facilitate any financial transactions. We do not collect payment information, bank details, or UPI IDs. All platform activity relates to physical resources and volunteer services.',
  },
  {
    title: 'Data Security',
    content: 'We use encrypted sessions, password hashing, role-based access control, and account lockout protection. Administrative access is restricted and audited.',
  },
  {
    title: 'Your Rights',
    content: 'You may request access to, correction of, or deletion of your personal data by contacting support@hopeconnect.org. You may deactivate your account at any time.',
  },
  {
    title: 'Contact',
    content: 'For privacy-related inquiries, email support@hopeconnect.org or visit our Contact page.',
  },
];

export default function PrivacyPage() {
  return (
    <Box>
      <PageHero
        title="Privacy Policy"
        subtitle="How HopeConnect collects, uses, and protects your information."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy' }]}
      />

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Last updated: June 2026
        </Typography>
        {sections.map((section) => (
          <Box key={section.title} mb={4}>
            <Typography variant="h6" fontWeight={700} gutterBottom color="primary.main">
              {section.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
              {section.content}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
