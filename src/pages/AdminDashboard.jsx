import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import api from '../api/axios';
import PolicyBanner from '../components/PolicyBanner';
import { DONATION_STATUS } from '../utils/constants';

export default function AdminDashboard() {
  const [tab, setTab] = useState(0);
  const [stats, setStats] = useState(null);
  const [donations, setDonations] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const loadData = async () => {
    try {
      const [dashRes, donationsRes, usersRes] = await Promise.all([
        api.get('/admin/dashboard'),
        api.get('/donations'),
        api.get('/admin/users'),
      ]);
      setStats(dashRes.data.stats);
      setDonations(donationsRes.data.donations);
      setUsers(usersRes.data.users);
    } catch {
      setError('Failed to load admin data');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/donations/${id}/status`, { status });
      loadData();
    } catch {
      setError('Failed to update donation status');
    }
  };

  const toggleLock = async (id, isLocked) => {
    try {
      await api.patch(`/admin/users/${id}/lock`, { isLocked: !isLocked });
      loadData();
    } catch {
      setError('Failed to update user');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <AdminPanelSettingsIcon color="primary" sx={{ fontSize: 36 }} />
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Admin Dashboard
          </Typography>
          <Typography color="text.secondary">Manage donations, customers, and platform operations</Typography>
        </Box>
      </Box>

      <PolicyBanner compact />
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {stats && (
        <Grid container spacing={3} mb={4}>
          {[
            { label: 'Customers', value: stats.totalCustomers, color: 'primary.main' },
            { label: 'Total Donations', value: stats.totalDonations, color: 'info.main' },
            { label: 'Pending', value: stats.pendingDonations, color: 'warning.main' },
            { label: 'Distributed', value: stats.distributedDonations, color: 'success.main' },
          ].map((item) => (
            <Grid item xs={6} md={3} key={item.label}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography variant="h4" fontWeight={700} sx={{ color: item.color }}>
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Card>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
          <Tab label="Donations" />
          <Tab label="Customers" />
        </Tabs>

        <CardContent>
          {tab === 0 && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Donor</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Update</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {donations.map((donation) => (
                    <TableRow key={donation._id}>
                      <TableCell>
                        <Typography variant="body2" fontWeight={600}>
                          {donation.donor?.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {donation.donor?.email}
                        </Typography>
                      </TableCell>
                      <TableCell>{donation.itemName}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {donation.category.replace('_', ' ')}
                      </TableCell>
                      <TableCell>{donation.quantity}</TableCell>
                      <TableCell>
                        <Chip
                          label={DONATION_STATUS[donation.status]?.label}
                          color={DONATION_STATUS[donation.status]?.color}
                          size="small"
                        />
                      </TableCell>
                      <TableCell sx={{ minWidth: 160 }}>
                        <FormControl size="small" fullWidth>
                          <InputLabel>Status</InputLabel>
                          <Select
                            value={donation.status}
                            label="Status"
                            onChange={(e) => updateStatus(donation._id, e.target.value)}
                          >
                            {Object.keys(DONATION_STATUS).map((status) => (
                              <MenuItem key={status} value={status}>
                                {DONATION_STATUS[status].label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {tab === 1 && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone || '—'}</TableCell>
                      <TableCell>
                        <Chip
                          label={user.isLocked ? 'Locked' : 'Active'}
                          color={user.isLocked ? 'error' : 'success'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={user.isLocked ? 'Unlock' : 'Lock'}
                          clickable
                          onClick={() => toggleLock(user._id, user.isLocked)}
                          color={user.isLocked ? 'success' : 'warning'}
                          size="small"
                        />
                      </TableCell>
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
