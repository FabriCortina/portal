import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Paper, Typography, Grid, Box, CircularProgress } from '@mui/material';
import { MetricsChart } from '../../components/metrics/MetricsChart';
import { useCollaboratorMetrics } from '../../hooks/useCollaboratorMetrics';

export const CollaboratorMetricsPage: React.FC = () => {
  const { t } = useTranslation();
  const { collaboratorId } = useParams<{ collaboratorId: string }>();
  const { data, isLoading, error } = useCollaboratorMetrics(collaboratorId || '');

  if (error) {
    return (
      <Paper className="p-4">
        <Typography color="error">
          {t('metrics.error')}
        </Typography>
      </Paper>
    );
  }

  if (isLoading) {
    return (
      <Paper className="p-4">
        <Box className="flex justify-center items-center h-64">
          <CircularProgress />
        </Box>
      </Paper>
    );
  }

  return (
    <Paper className="p-4">
      <Typography variant="h4" gutterBottom>
        {t('metrics.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('metrics.description')}
      </Typography>

      {data && (
        <Box className="mb-8">
          <Typography variant="h5" gutterBottom>
            {data.collaborator.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {data.collaborator.role}
          </Typography>
        </Box>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MetricsChart data={data!} metricType="rotation" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MetricsChart data={data!} metricType="satisfaction" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MetricsChart data={data!} metricType="sprintCompletion" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MetricsChart data={data!} metricType="averageBugs" />
        </Grid>
      </Grid>
    </Paper>
  );
}; 