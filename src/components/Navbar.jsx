import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Paper,
  Grid,
  Divider,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MAIN_NAV } from '../utils/navLinks';
import { brand, gradients } from '../theme/brand';

function NavLink({ to, children, onClick, active }) {
  return (
    <Button
      component={RouterLink}
      to={to}
      onClick={onClick}
      sx={{
        color: active ? brand.green[500] : brand.slate[700],
        fontWeight: active ? 700 : 600,
        fontSize: '0.9rem',
        px: 1.5,
        py: 1,
        borderRadius: 2,
        position: 'relative',
        bgcolor: active ? alpha(brand.green[500], 0.08) : 'transparent',
        '&:hover': {
          bgcolor: alpha(brand.green[500], 0.06),
          color: brand.green[500],
        },
        '&::after': active
          ? {
              content: '""',
              position: 'absolute',
              bottom: 4,
              left: '20%',
              right: '20%',
              height: 2,
              borderRadius: 2,
              bgcolor: brand.gold[500],
            }
          : {},
      }}
    >
      {children}
    </Button>
  );
}

function ProgramsMegaMenu({ anchorEl, open, onClose }) {
  const programs = MAIN_NAV.find((n) => n.id === 'programs');

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      slotProps={{ paper: { sx: { mt: 1.5, borderRadius: 3, overflow: 'hidden', boxShadow: 4, border: `1px solid ${alpha(brand.green[500], 0.1)}` } } }}
    >
      <Box sx={{ p: 2.5, minWidth: 520, background: gradients.heroSoft }}>
        <Typography variant="overline" fontWeight={700} color="primary.main" sx={{ letterSpacing: 1.2 }}>
          Impact Programs
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Choose a cause — physical donations only, no money involved.
        </Typography>
        <Grid container spacing={1.5}>
          {programs.children.map((item) => {
            const Icon = item.icon;
            return (
              <Grid item xs={6} key={item.path}>
                <Paper
                  component={RouterLink}
                  to={item.path}
                  onClick={onClose}
                  elevation={0}
                  sx={{
                    p: 2,
                    display: 'flex',
                    gap: 1.5,
                    textDecoration: 'none',
                    borderRadius: 2.5,
                    border: '1px solid',
                    borderColor: alpha(item.color, 0.15),
                    transition: '0.2s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 3,
                      borderColor: item.color,
                      bgcolor: alpha(item.color, 0.04),
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: alpha(item.color, 0.12),
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700} color="text.primary">
                      {item.label}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" lineHeight={1.4}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Popover>
  );
}

function DiscoverMenu({ anchorEl, open, onClose }) {
  const discover = MAIN_NAV.find((n) => n.id === 'discover');

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      slotProps={{ paper: { sx: { mt: 1.5, borderRadius: 2.5, minWidth: 220, boxShadow: 4 } } }}
    >
      <List dense disablePadding sx={{ py: 1 }}>
        {discover.children.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemButton key={item.path} component={RouterLink} to={item.path} onClick={onClose} sx={{ mx: 1, borderRadius: 2 }}>
              {Icon && (
                <ListItemIcon sx={{ minWidth: 36, color: brand.green[500] }}>
                  <Icon fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
            </ListItemButton>
          );
        })}
      </List>
    </Popover>
  );
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [programsAnchor, setProgramsAnchor] = useState(null);
  const [discoverAnchor, setDiscoverAnchor] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const isProgramsActive = MAIN_NAV.find((n) => n.id === 'programs')?.children.some((c) => isActive(c.path));

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const closeMenus = () => {
    setProgramsAnchor(null);
    setDiscoverAnchor(null);
  };

  const authSection = user ? (
    <Box display="flex" alignItems="center" gap={1}>
      {user.role === 'admin' ? (
        <NavLink to="/admin" active={isActive('/admin')}>Admin</NavLink>
      ) : (
        <>
          <NavLink to="/dashboard" active={isActive('/dashboard')}>Dashboard</NavLink>
          <Button component={RouterLink} to="/donate" variant="contained" color="primary" size="small" sx={{ px: 2 }}>
            Donate
          </Button>
        </>
      )}
      <Button variant="outlined" size="small" onClick={handleLogout} sx={{ borderColor: alpha(brand.green[500], 0.3), color: brand.slate[700] }}>
        Logout
      </Button>
    </Box>
  ) : (
    <Box display="flex" alignItems="center" gap={1}>
      <Button
        component={RouterLink}
        to="/login"
        startIcon={<LoginIcon />}
        size="small"
        sx={{ color: brand.slate[700], fontWeight: 600 }}
      >
        Login
      </Button>
      <Button
        component={RouterLink}
        to="/register"
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<PersonAddIcon />}
        sx={{ px: 2.5 }}
      >
        Register
      </Button>
    </Box>
  );

  const mobileDrawer = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{ sx: { width: 300, bgcolor: brand.slate[50] } }}
    >
      <Box sx={{ background: gradients.cta, color: 'white', p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={1}>
          <VolunteerActivismIcon />
          <Typography fontWeight={800}>HopeConnect</Typography>
        </Box>
        <IconButton color="inherit" onClick={() => setDrawerOpen(false)} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ px: 1.5, py: 2 }}>
        {MAIN_NAV.map((item) => {
          if (item.children) {
            const expanded = mobileExpanded === item.id;
            return (
              <Box key={item.id}>
                <ListItemButton
                  onClick={() => setMobileExpanded(expanded ? null : item.id)}
                  sx={{ borderRadius: 2, mb: 0.5, bgcolor: expanded ? alpha(brand.green[500], 0.08) : 'transparent' }}
                >
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
                  <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                </ListItemButton>
                {expanded &&
                  item.children.map((child) => {
                    const Icon = child.icon;
                    return (
                      <ListItemButton
                        key={child.path}
                        component={RouterLink}
                        to={child.path}
                        onClick={() => setDrawerOpen(false)}
                        sx={{ pl: 3, borderRadius: 2, mb: 0.25 }}
                        selected={isActive(child.path)}
                      >
                        {Icon && (
                          <ListItemIcon sx={{ minWidth: 36, color: child.color || brand.green[500] }}>
                            <Icon fontSize="small" />
                          </ListItemIcon>
                        )}
                        <ListItemText primary={child.label} primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 600 }} />
                      </ListItemButton>
                    );
                  })}
              </Box>
            );
          }

          const Icon = item.icon;
          return (
            <ListItemButton
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              selected={isActive(item.path)}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              {Icon && (
                <ListItemIcon sx={{ minWidth: 36, color: brand.green[500] }}>
                  <Icon fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          );
        })}
      </List>

      <Divider sx={{ mx: 2 }} />
      <Box sx={{ p: 2 }}>{authSection}</Box>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? gradients.navbar : 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${alpha(brand.green[500], scrolled ? 0.12 : 0.06)}`,
          boxShadow: scrolled ? '0 4px 24px rgba(10, 77, 48, 0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 1 }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                color: 'inherit',
                mr: 2,
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2.5,
                  background: gradients.cta,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: `0 4px 12px ${alpha(brand.green[500], 0.35)}`,
                }}
              >
                <VolunteerActivismIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={800} color={brand.slate[900]} lineHeight={1.1}>
                  HopeConnect
                </Typography>
                <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ fontSize: '0.65rem', letterSpacing: 0.5 }}>
                  NGO PLATFORM
                </Typography>
              </Box>
            </Box>

            {isMobile ? (
              <>
                <Box flexGrow={1} />
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: brand.slate[700] }}>
                  <MenuIcon />
                </IconButton>
                {mobileDrawer}
              </>
            ) : (
              <>
                <Box display="flex" alignItems="center" flexGrow={1} flexWrap="wrap">
                  {MAIN_NAV.map((item) => {
                    if (item.id === 'programs') {
                      return (
                        <Button
                          key={item.id}
                          endIcon={<ExpandMoreIcon />}
                          onClick={(e) => {
                            setDiscoverAnchor(null);
                            setProgramsAnchor(e.currentTarget);
                          }}
                          sx={{
                            color: isProgramsActive ? brand.green[500] : brand.slate[700],
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            px: 1.5,
                            bgcolor: isProgramsActive ? alpha(brand.green[500], 0.08) : 'transparent',
                            '&:hover': { bgcolor: alpha(brand.green[500], 0.06) },
                          }}
                        >
                          {item.label}
                        </Button>
                      );
                    }
                    if (item.id === 'discover') {
                      return (
                        <Button
                          key={item.id}
                          endIcon={<ExpandMoreIcon />}
                          onClick={(e) => {
                            setProgramsAnchor(null);
                            setDiscoverAnchor(e.currentTarget);
                          }}
                          sx={{
                            color: brand.slate[700],
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            px: 1.5,
                            '&:hover': { bgcolor: alpha(brand.green[500], 0.06), color: brand.green[500] },
                          }}
                        >
                          {item.label}
                        </Button>
                      );
                    }
                    return (
                      <NavLink key={item.path} to={item.path} active={isActive(item.path)}>
                        {item.label}
                      </NavLink>
                    );
                  })}
                </Box>
                {authSection}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <ProgramsMegaMenu anchorEl={programsAnchor} open={Boolean(programsAnchor)} onClose={closeMenus} />
      <DiscoverMenu anchorEl={discoverAnchor} open={Boolean(discoverAnchor)} onClose={closeMenus} />
    </>
  );
}
