import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ProtectedRoute, GuestRoute } from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import HumanWelfarePage from './pages/HumanWelfarePage';
import AnimalWelfarePage from './pages/AnimalWelfarePage';
import HomeSupportPage from './pages/HomeSupportPage';
import EnvironmentPage from './pages/EnvironmentPage';
import VolunteerPage from './pages/VolunteerPage';
import HowItWorksPage from './pages/HowItWorksPage';
import StoriesPage from './pages/StoriesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerDashboard from './pages/CustomerDashboard';
import DonatePage from './pages/DonatePage';
import AdminDashboard from './pages/AdminDashboard';

function AppLayout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/human-welfare" element={<HumanWelfarePage />} />
              <Route path="/animal-welfare" element={<AnimalWelfarePage />} />
              <Route path="/home-support" element={<HomeSupportPage />} />
              <Route path="/environment" element={<EnvironmentPage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />

              <Route element={<GuestRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>

              <Route element={<ProtectedRoute roles={['customer']} />}>
                <Route path="/dashboard" element={<CustomerDashboard />} />
                <Route path="/donate" element={<DonatePage />} />
              </Route>

              <Route element={<ProtectedRoute roles={['admin']} />}>
                <Route path="/admin" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
