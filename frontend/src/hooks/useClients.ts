import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';

interface Client {
  id: string;
  name: string;
  email: string;
}

export const useClients = () => {
  const { user } = useAuth();

  return useQuery<Client[]>({
    queryKey: ['clients', user?.tenantId],
    queryFn: async () => {
      const response = await fetch(`/api/clients?tenantId=${user?.tenantId}`);
      if (!response.ok) {
        throw new Error('Error al obtener los clientes');
      }
      return response.json();
    },
    enabled: !!user?.tenantId,
  });
}; 