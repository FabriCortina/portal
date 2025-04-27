import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { LoginCredentials, AuthResponse } from '../types/auth.types';
import jwtDecode from 'jwt-decode';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

interface JwtPayload {
  exp: number;
  sub: string;
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

class AuthService {
  private api: AxiosInstance;
  private refreshPromise: Promise<AuthResponse> | null = null;

  constructor() {
    this.api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
// Interceptor para agregar el token a las peticiones
    this.api.interceptors.request.use(
  (config) => {
        const token = this.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de autenticación
    this.api.interceptors.response.use(
  (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;
        
        if (!originalRequest || !error.response) {
          return Promise.reject(error);
        }

    // Si el error es 401 y no es una petición de refresh
        if (
          error.response.status === 401 &&
          !originalRequest._retry &&
          originalRequest.url !== '/auth/refresh'
        ) {
      originalRequest._retry = true;

      try {
            // Reutilizar la promesa si ya hay un refresh en curso
            if (!this.refreshPromise) {
              this.refreshPromise = this.refreshToken();
        }

            const authResponse = await this.refreshPromise;
            
            // Actualizar el token en la petición original
            originalRequest.headers.Authorization = `Bearer ${authResponse.accessToken}`;
            
            // Limpiar la promesa de refresh
            this.refreshPromise = null;
            
            // Reintentar la petición original
            return this.api(originalRequest);
      } catch (refreshError) {
            this.refreshPromise = null;
            this.logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
  }

  private getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch {
      return true;
    }
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await this.api.post<AuthResponse>('/auth/login', credentials);
      const { accessToken, refreshToken, user } = response.data;

      this.setTokens(accessToken, refreshToken);
      localStorage.setItem('user', JSON.stringify(user));

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error en el inicio de sesión');
      }
      throw error;
    }
  }

  async refreshToken(): Promise<AuthResponse> {
    const refreshToken = this.getRefreshToken();
    
    if (!refreshToken) {
      throw new Error('No hay refresh token disponible');
    }

    try {
      const response = await this.api.post<AuthResponse>('/auth/refresh', {
        refreshToken,
      });

      const { accessToken, refreshToken: newRefreshToken, user } = response.data;
      this.setTokens(accessToken, newRefreshToken);
    localStorage.setItem('user', JSON.stringify(user));

    return response.data;
    } catch (error) {
      this.logout();
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  getCurrentUser(): AuthResponse['user'] | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  isAuthenticated(): boolean {
    const accessToken = this.getAccessToken();
    if (!accessToken) return false;
    return !this.isTokenExpired(accessToken);
  }

  async validateSession(): Promise<boolean> {
    const accessToken = this.getAccessToken();
    if (!accessToken) return false;

    if (this.isTokenExpired(accessToken)) {
      try {
        await this.refreshToken();
        return true;
      } catch {
        return false;
      }
    }

    return true;
  }
}

export default new AuthService();
