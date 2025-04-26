import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Collaborator {
  id: string;
  name: string;
  role: string;
  province: string;
  isActive: boolean;
}

interface CollaboratorsListProps {
  collaborators: Collaborator[];
}

export const CollaboratorsList: React.FC<CollaboratorsListProps> = ({ collaborators }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Colaboradores Activos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto max-h-[400px]">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provincia</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {collaborators.map((collaborator) => (
                <tr key={collaborator.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{collaborator.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{collaborator.role}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{collaborator.province}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}; 