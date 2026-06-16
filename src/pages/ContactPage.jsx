import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Stack,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/layout/SectionHeading';
import api from '../api/axios';

const contactInfo = [
  { icon: EmailIcon, label: 'Email', value: 'support@hopeconnect.org' },
  { icon: PhoneIcon, label: 'Phone', value: '+91 98765 43210' },
  { icon: LocationOnIcon, label: 'Head Office', value: 'Connaught Place, New Delhi, India' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(false);
    setError('');
    setLoading(true);
    try {
      await api.post('/queries', form);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <PageHero
        title="Contact Us"
        subtitle="Have questions about donations, volunteering, or partnerships? We'd love to hear from you."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <SectionHeading title="Get in Touch" align="left" />
            <Stack spacing={2} mb={4}>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.label}>
                    <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center', py: 2 }}>
                      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 1.5, borderRadius: 2 }}>
                        <Icon />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {info.label}
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {info.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Stack>
            <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
              Office hours: Monday – Saturday, 9:00 AM – 6:00 PM IST. We respond to all inquiries within 24 hours.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Send a Message
                </Typography>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                {sent && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Thank you! Your message has been received. We&apos;ll get back to you soon.
                  </Alert>
                )}
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required type="email" label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth required label="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth required multiline rows={5} label="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </Grid>
                  </Grid>
                  <Button type="submit" variant="contained" size="large" sx={{ mt: 3 }} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
