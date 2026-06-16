import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { gradients } from '../../theme/brand';

export default function PageHero({ title, subtitle, gradient, breadcrumbs = [] }) {
  return (
    <Box
      sx={{
        background: gradient || gradients.hero,
        color: 'white',
        py: { xs: 6, md: 9 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.06)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -60,
          left: -60,
          width: 200,
          height: 200,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.04)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {breadcrumbs.length > 0 && (
          <Breadcrumbs sx={{ mb: 2, '& .MuiBreadcrumbs-separator': { color: 'rgba(255,255,255,0.5)' } }}>
            {breadcrumbs.map((crumb) =>
              crumb.path ? (
                <Link
                  key={crumb.label}
                  component={RouterLink}
                  to={crumb.path}
                  sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontWeight: 500, '&:hover': { color: '#fff' } }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <Typography key={crumb.label} color="white" fontWeight={600}>
                  {crumb.label}
                </Typography>
              )
            )}
          </Breadcrumbs>
        )}
        <Typography variant="h2" component="h1" fontWeight={800} sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" sx={{ opacity: 0.92, fontWeight: 400, maxWidth: 720, lineHeight: 1.8 }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
