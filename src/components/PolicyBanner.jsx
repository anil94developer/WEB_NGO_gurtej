import { Alert, AlertTitle } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { POLICY_NOTICE } from '../utils/constants';
import { brand } from '../theme/brand';
import { alpha } from '@mui/material/styles';

export default function PolicyBanner({ compact = false }) {
  return (
    <Alert
      severity="info"
      icon={<InfoOutlinedIcon />}
      sx={{
        borderRadius: 3,
        mb: compact ? 2 : 3,
        bgcolor: alpha(brand.teal[500], 0.08),
        border: `1px solid ${alpha(brand.teal[500], 0.2)}`,
        color: brand.slate[900],
        '& .MuiAlert-icon': { color: brand.teal[600] },
      }}
    >
      {!compact && (
        <AlertTitle sx={{ fontWeight: 700, color: brand.green[700] }}>
          Non-Monetary Donation Policy
        </AlertTitle>
      )}
      {POLICY_NOTICE}
    </Alert>
  );
}
