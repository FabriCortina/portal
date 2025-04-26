import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';
import { DashboardMetrics, DashboardConfig } from '../types/dashboard';

export const useDashboardMetrics = () => {
  const { user } = useAuth();

  return useQuery<DashboardMetrics>({
    queryKey: ['dashboardMetrics', user?.tenantId],
    queryFn: async () => {
      const response = await fetch(`/api/dashboard/metrics?tenantId=${user?.tenantId}`);
      if (!response.ok) {
        throw new Error('Error al obtener las métricas del dashboard');
      }
      return response.json();
    },
    enabled: !!user?.tenantId,
  });
};

export const useDashboardConfig = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: config } = useQuery<DashboardConfig>({
    queryKey: ['dashboardConfig', user?.tenantId],
    queryFn: async () => {
      const response = await fetch(`/api/dashboard/config?tenantId=${user?.tenantId}`);
      if (!response.ok) {
        throw new Error('Error al obtener la configuración del dashboard');
      }
      return response.json();
    },
    enabled: !!user?.tenantId,
  });

  const updateConfig = useMutation({
    mutationFn: async (newConfig: DashboardConfig) => {
      const response = await fetch('/api/dashboard/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConfig),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la configuración del dashboard');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['dashboardConfig']);
    },
  });

  return { config, updateConfig };
}; 