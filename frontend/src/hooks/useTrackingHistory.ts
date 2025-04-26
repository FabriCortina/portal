import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';
import { CollaboratorTracking } from '../types/tracking';

export const useTrackingHistory = (collaboratorId: string) => {
  const { user } = useAuth();

  return useQuery<CollaboratorTracking>({
    queryKey: ['trackingHistory', collaboratorId, user?.tenantId],
    queryFn: async () => {
      const response = await fetch(
        `/api/trackings/history?collaboratorId=${collaboratorId}&tenantId=${user?.tenantId}`
      );
      if (!response.ok) {
        throw new Error('Error al obtener el historial de seguimientos');
      }
      return response.json();
    },
    enabled: !!collaboratorId && !!user?.tenantId,
  });
}; 