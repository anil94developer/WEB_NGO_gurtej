import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PolicyBanner from '../components/PolicyBanner';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await register({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.errors?.[0]?.msg || 'Registration failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <PolicyBanner compact />
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Box textAlign="center" mb={3}>
            <PersonAddIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Join HopeConnect
            </Typography>
            <Typography color="text.secondary">Register as a customer to donate physical resources</Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              margin="normal"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              fullWidth
              label="Phone Number"
              margin="normal"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              required
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            />
            <Button fullWidth type="submit" variant="contained" size="large" sx={{ mt: 3 }} disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </Box>

          <Typography variant="body2" textAlign="center" mt={3}>
            Already have an account?{' '}
            <Link component={RouterLink} to="/login" fontWeight={600}>
              Sign In
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
