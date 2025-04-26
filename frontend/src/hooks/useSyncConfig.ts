import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';

interface SyncConfig {
  sheetId: string;
  range: string;
  updateFrequency: number;
}

export const useSyncConfig = () => {
  const { user } = useAuth();

  return useQuery<SyncConfig>({
    queryKey: ['syncConfig', user?.tenantId],
    queryFn: async () => {
      const response = await fetch(`/api/collaborator-sync/${user?.tenantId}/config`);
      if (!response.ok) {
        throw new Error('Error al obtener la configuración');
      }
      return response.json();
    },
    enabled: !!user?.tenantId,
  });
}; 