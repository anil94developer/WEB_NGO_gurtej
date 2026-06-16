import { Box, Button, Container, Typography, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { gradients } from '../../theme/brand';

export default function CTASection({ title, subtitle, primaryLabel, primaryPath, secondaryLabel, secondaryPath }) {
  return (
    <Box sx={{ background: gradients.cta, color: 'white', py: { xs: 6, md: 8 }, position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)',
        }}
      />
      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, lineHeight: 1.9, maxWidth: 560, mx: 'auto' }}>
          {subtitle}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            component={RouterLink}
            to={primaryPath}
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryPath && (
            <Button
              component={RouterLink}
              to={secondaryPath}
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.6)',
                color: 'white',
                fontWeight: 700,
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              {secondaryLabel}
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
