import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';
import { CollaboratorMetrics } from '../types/metrics';

export const useCollaboratorMetrics = (collaboratorId: string) => {
  const { user } = useAuth();

  return useQuery<CollaboratorMetrics>({
    queryKey: ['collaboratorMetrics', collaboratorId, user?.tenantId],
    queryFn: async () => {
      const response = await fetch(
        `/api/metrics/collaborator?collaboratorId=${collaboratorId}&tenantId=${user?.tenantId}`
      );
      if (!response.ok) {
        throw new Error('Error al obtener las métricas del colaborador');
      }
      return response.json();
    },
    enabled: !!collaboratorId && !!user?.tenantId,
    refetchInterval: 30000, // Actualizar cada 30 segundos
  });
}; 