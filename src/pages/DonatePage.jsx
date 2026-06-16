import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import PolicyBanner from '../components/PolicyBanner';
import { DONATION_CATEGORIES } from '../utils/constants';

export default function DonatePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    category: '',
    itemName: '',
    quantity: 1,
    description: '',
    pickupAddress: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await api.post('/donations', {
        ...form,
        quantity: Number(form.quantity),
      });
      setSuccess('Donation submitted successfully! Our team will schedule a pickup.');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit donation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <VolunteerActivismIcon color="primary" sx={{ fontSize: 48 }} />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Donate Physical Resources
        </Typography>
        <Typography color="text.secondary">
          Submit clothes, food, building materials, or other non-monetary items for community support.
        </Typography>
      </Box>

      <PolicyBanner compact />

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Donation Category</InputLabel>
                  <Select
                    value={form.category}
                    label="Donation Category"
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    {DONATION_CATEGORIES.map((cat) => (
                      <MenuItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  required
                  label="Item Name"
                  placeholder="e.g. Winter Blankets, School Books"
                  value={form.itemName}
                  onChange={(e) => setForm({ ...form, itemName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Quantity"
                  inputProps={{ min: 1 }}
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  placeholder="Condition, size, or other details"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Pickup Address"
                  placeholder="Full address for resource collection"
                  value={form.pickupAddress}
                  onChange={(e) => setForm({ ...form, pickupAddress: e.target.value })}
                />
              </Grid>
            </Grid>

            <Button fullWidth type="submit" variant="contained" size="large" sx={{ mt: 3 }} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Donation Request'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
