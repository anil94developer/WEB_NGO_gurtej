import { Box, Container, Grid, Typography } from '@mui/material';

export default function StatsRow({ stats, light = false }) {
  return (
    <Box sx={{ bgcolor: light ? 'transparent' : 'background.paper', py: { xs: 4, md: 5 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  fontWeight={800}
                  color={light ? 'white' : 'primary.main'}
                  sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color={light ? 'rgba(255,255,255,0.85)' : 'text.secondary'} fontWeight={500}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
