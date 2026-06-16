import { Box, Container, Typography, Grid, Link, Stack, Divider, Button } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link as RouterLink } from 'react-router-dom';
import { POLICY_NOTICE } from '../utils/constants';
import { FOOTER_LINKS } from '../utils/navLinks';
import { brand, gradients } from '../theme/brand';
import { alpha } from '@mui/material/styles';

function FooterColumn({ title, links }) {
  return (
    <Box>
      <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ color: brand.gold[400], letterSpacing: 0.5 }}>
        {title}
      </Typography>
      <Stack spacing={1}>
        {links.map((link) => (
          <Link
            key={link.path}
            component={RouterLink}
            to={link.path}
            underline="none"
            variant="body2"
            sx={{
              color: alpha('#fff', 0.75),
              fontWeight: 500,
              transition: '0.2s',
              '&:hover': { color: '#fff', pl: 0.5 },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: gradients.footer, color: 'white', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ pt: 7, pb: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2.5,
                  bgcolor: alpha('#fff', 0.12),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <VolunteerActivismIcon />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  HopeConnect
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  NGO Operating System
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.9, mb: 2.5 }}>
              A unified platform for physical resource donations, volunteer coordination,
              and community development across India.
            </Typography>
            <Stack spacing={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon sx={{ fontSize: 18, opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>support@hopeconnect.org</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon sx={{ fontSize: 18, opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>+91 98765 43210</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <FooterColumn title="Programs" links={FOOTER_LINKS.programs} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <FooterColumn title="Organization" links={FOOTER_LINKS.organization} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ color: brand.gold[400] }}>
              Policy
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.75, lineHeight: 1.8, display: 'block', mb: 2 }}>
              {POLICY_NOTICE}
            </Typography>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
            >
              Join Now
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: alpha('#fff', 0.12) }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} HopeConnect. Physical resources & community services only.
          </Typography>
          <Link
            component={RouterLink}
            to="/privacy"
            variant="caption"
            underline="hover"
            sx={{ color: alpha('#fff', 0.6), '&:hover': { color: '#fff' } }}
          >
            Privacy Policy
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
