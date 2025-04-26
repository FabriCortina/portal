import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, AuthState, LoginCredentials } from '../types/auth';
import { authService } from '../services/authService';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: authService.getCurrentUser(),
    tokens: authService.getTokens(),
    isAuthenticated: !!authService.getCurrentUser(),
    isLoading: true,
  });

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (state.tokens) {
          await authService.refreshTokens();
        }
      } catch (error) {
        authService.logout();
        setState(prev => ({
          ...prev,
          user: null,
          tokens: null,
          isAuthenticated: false,
        }));
      } finally {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const { user, tokens } = await authService.login(credentials);
    setState({
      user,
      tokens,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = () => {
    authService.logout();
    setState({
      user: null,
      tokens: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const refreshTokens = async () => {
    const newTokens = await authService.refreshTokens();
    setState(prev => ({
      ...prev,
      tokens: newTokens,
    }));
  };

  const value = {
    ...state,
    login,
    logout,
    refreshTokens,
  };

  if (state.isLoading) {
    return <div>Loading...</div>; // Considera usar un componente de loading más elaborado
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 