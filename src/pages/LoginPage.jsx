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
import LoginIcon from '@mui/icons-material/Login';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PolicyBanner from '../components/PolicyBanner';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await login(form.email, form.password);
      navigate(data.user.role === 'admin' ? '/admin' : '/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
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
            <LoginIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Welcome Back
            </Typography>
            <Typography color="text.secondary">Sign in to your HopeConnect account</Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
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
              label="Password"
              type="password"
              margin="normal"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Button fullWidth type="submit" variant="contained" size="large" sx={{ mt: 3 }} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </Box>

          <Typography variant="body2" textAlign="center" mt={3}>
            Don&apos;t have an account?{' '}
            <Link component={RouterLink} to="/register" fontWeight={600}>
              Register as Customer
            </Link>
          </Typography>

          <Alert severity="warning" sx={{ mt: 3 }}>
            Demo Admin: admin@hopeconnect.org / admin123
          </Alert>
        </CardContent>
      </Card>
    </Container>
  );
}
