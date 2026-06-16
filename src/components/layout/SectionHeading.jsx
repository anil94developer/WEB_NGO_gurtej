import { Box, Typography } from '@mui/material';

export default function SectionHeading({ title, subtitle, align = 'center', light = false }) {
  return (
    <Box textAlign={align} mb={4}>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        color={light ? 'white' : 'text.primary'}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color={light ? 'rgba(255,255,255,0.85)' : 'text.secondary'}
          maxWidth={640}
          mx={align === 'center' ? 'auto' : 0}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
