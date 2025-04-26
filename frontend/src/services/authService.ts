import axios from 'axios';
import { AuthTokens, LoginCredentials, User } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Crear instancia de axios
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
  (config) => {
    const tokens = localStorage.getItem('tokens');
    if (tokens) {
      const { accessToken } = JSON.parse(tokens) as AuthTokens;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de token expirado
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const tokens = localStorage.getItem('tokens');
        if (!tokens) throw new Error('No refresh token available');
        
        const { refreshToken } = JSON.parse(tokens) as AuthTokens;
        const response = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
        const newTokens: AuthTokens = response.data;
        
        localStorage.setItem('tokens', JSON.stringify(newTokens));
        api.defaults.headers.common['Authorization'] = `Bearer ${newTokens.accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
        
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('tokens');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const authService = {
  async login(credentials: LoginCredentials): Promise<{ user: User; tokens: AuthTokens }> {
    const response = await api.post('/auth/login', credentials);
    const { user, ...tokens } = response.data;
    
    // Guardar tokens y usuario en localStorage de forma segura
    localStorage.setItem('tokens', JSON.stringify(tokens));
    localStorage.setItem('user', JSON.stringify(user));
    
    return { user, tokens };
  },

  async refreshTokens(): Promise<AuthTokens> {
    const tokens = localStorage.getItem('tokens');
    if (!tokens) throw new Error('No refresh token available');
    
    const { refreshToken } = JSON.parse(tokens) as AuthTokens;
    const response = await api.post('/auth/refresh', { refreshToken });
    const newTokens: AuthTokens = response.data;
    
    localStorage.setItem('tokens', JSON.stringify(newTokens));
    return newTokens;
  },

  logout(): void {
    localStorage.removeItem('tokens');
    localStorage.removeItem('user');
  },

  getCurrentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  getTokens(): AuthTokens | null {
    const tokens = localStorage.getItem('tokens');
    return tokens ? JSON.parse(tokens) : null;
  },
}; 