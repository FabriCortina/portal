import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { theme } from './theme';
import ThemeSwitcher from './components/ThemeSwitcher';
import { LoginPage } from './pages/auth/LoginPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { OperationsPage } from './pages/operations/OperationsPage';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext';
import { Navigate } from 'react-router-dom';


const App = () => {
  const { i18n } = useTranslation();

  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as "light" | "dark" | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? "dark" : "light");
    }
  }, []);

  const handleToggleTheme = (newMode: "light" | "dark") => {
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return (
    <CustomThemeProvider>
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          {/* Switch para cambiar tema */}
          
          <ThemeSwitcher />

          {/* Ruteo de pantallas */}
          <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} /> {}
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/operations"
              element={
                <ProtectedRoute>
                  <OperationsPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
    </CustomThemeProvider>
  );
};

export default App;
