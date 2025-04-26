import React, { createContext, useContext, useState, useEffect } from 'react';

interface Tenant {
  id: string;
  name: string;
  domain: string;
}

interface TenantContextType {
  currentTenant: Tenant | null;
  setCurrentTenant: (tenant: Tenant | null) => void;
  isLoading: boolean;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
};

interface TenantProviderProps {
  children: React.ReactNode;
}

export const TenantProvider: React.FC<TenantProviderProps> = ({ children }) => {
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeTenant = async () => {
      try {
        // Aquí iría la lógica para obtener el tenant basado en el dominio
        const domain = window.location.hostname;
        // const response = await api.getTenantByDomain(domain);
        // setCurrentTenant(response.data);
      } catch (error) {
        console.error('Error initializing tenant:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTenant();
  }, []);

  const value = {
    currentTenant,
    setCurrentTenant,
    isLoading,
  };

  if (isLoading) {
    return <div>Loading tenant...</div>; // Aquí podrías usar un componente de loading más elaborado
  }

  return (
    <TenantContext.Provider value={value}>
      {children}
    </TenantContext.Provider>
  );
}; 