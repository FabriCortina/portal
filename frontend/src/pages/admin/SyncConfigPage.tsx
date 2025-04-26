import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography, Container } from '@mui/material';
import { SyncConfigForm } from '../../components/collaborator-sync/SyncConfigForm';

export const SyncConfigPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" className="py-8">
      <Paper className="p-6">
        <Typography variant="h4" component="h1" gutterBottom>
          {t('sync.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('sync.description')}
        </Typography>
        <SyncConfigForm />
      </Paper>
    </Container>
  );
}; 