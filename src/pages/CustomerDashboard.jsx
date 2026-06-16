import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link as RouterLink } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import PolicyBanner from '../components/PolicyBanner';
import { DONATION_STATUS } from '../utils/constants';

export default function CustomerDashboard() {
  const { user } = useAuth();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const { data } = await api.get('/donations/my');
        setDonations(data.donations);
      } catch {
        setError('Failed to load your donations');
      } finally {
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  const stats = {
    total: donations.length,
    pending: donations.filter((d) => d.status === 'pending').length,
    completed: donations.filter((d) => d.status === 'distributed').length,
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2} mb={3}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Welcome, {user?.name}
          </Typography>
          <Typography color="text.secondary">Manage your physical resource donations</Typography>
        </Box>
        <Button component={RouterLink} to="/donate" variant="contained" startIcon={<AddIcon />}>
          New Donation
        </Button>
      </Box>

      <PolicyBanner compact />

      <Grid container spacing={3} mb={4}>
        {[
          { label: 'Total Donations', value: stats.total, color: 'primary' },
          { label: 'Pending', value: stats.pending, color: 'warning' },
          { label: 'Distributed', value: stats.completed, color: 'success' },
        ].map((stat) => (
          <Grid item xs={12} sm={4} key={stat.label}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" variant="body2">
                  {stat.label}
                </Typography>
                <Typography variant="h3" fontWeight={700} color={`${stat.color}.main`}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <DashboardIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              My Donations
            </Typography>
          </Box>

          {error && <Alert severity="error">{error}</Alert>}
          {loading ? (
            <Typography color="text.secondary">Loading donations...</Typography>
          ) : donations.length === 0 ? (
            <Box textAlign="center" py={4}>
              <Typography color="text.secondary" mb={2}>
                You haven&apos;t submitted any donations yet.
              </Typography>
              <Button component={RouterLink} to="/donate" variant="contained">
                Submit Your First Donation
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {donations.map((donation) => (
                    <TableRow key={donation._id}>
                      <TableCell>{donation.itemName}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {donation.category.replace('_', ' ')}
                      </TableCell>
                      <TableCell>{donation.quantity}</TableCell>
                      <TableCell>
                        <Chip
                          label={DONATION_STATUS[donation.status]?.label || donation.status}
                          color={DONATION_STATUS[donation.status]?.color || 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{new Date(donation.createdAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
