import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useCollaborators } from '../../../hooks/useCollaborators';

export const CollaboratorsWidget: React.FC = () => {
  const { t } = useTranslation();
  const { data: collaborators, isLoading } = useCollaborators();

  if (isLoading) {
    return (
      <Paper className="p-4">
        <Typography variant="h6" gutterBottom>
          {t('dashboard.collaborators.title')}
        </Typography>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </Paper>
    );
  }

  return (
    <Paper className="p-4">
      <Typography variant="h6" gutterBottom>
        {t('dashboard.collaborators.title')}
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('dashboard.collaborators.name')}</TableCell>
              <TableCell>{t('dashboard.collaborators.role')}</TableCell>
              <TableCell>{t('dashboard.collaborators.status')}</TableCell>
              <TableCell>{t('dashboard.collaborators.satisfaction')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collaborators?.map((collaborator) => (
              <TableRow key={collaborator.id}>
                <TableCell>{collaborator.name}</TableCell>
                <TableCell>{collaborator.role}</TableCell>
                <TableCell>{collaborator.status}</TableCell>
                <TableCell>{collaborator.satisfaction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}; 