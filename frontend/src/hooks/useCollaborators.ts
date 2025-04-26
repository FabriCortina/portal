import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';

interface Collaborator {
  id: string;
  name: string;
  dni: string;
  status: string;
}

export const useCollaborators = () => {
  const { user } = useAuth();

  return useQuery<Collaborator[]>({
    queryKey: ['collaborators', user?.tenantId],
    queryFn: async () => {
      const response = await fetch(`/api/collaborators?tenantId=${user?.tenantId}`);
      if (!response.ok) {
        throw new Error('Error al obtener los colaboradores');
      }
      return response.json();
    },
    enabled: !!user?.tenantId,
  });
}; 