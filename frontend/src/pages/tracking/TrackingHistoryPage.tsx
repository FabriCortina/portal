import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Paper, Typography, Box } from '@mui/material';
import { TrackingTimeline } from '../../components/tracking/TrackingTimeline';
import { useTrackingHistory } from '../../hooks/useTrackingHistory';

export const TrackingHistoryPage: React.FC = () => {
  const { t } = useTranslation();
  const { collaboratorId } = useParams<{ collaboratorId: string }>();
  const { data, isLoading, error } = useTrackingHistory(collaboratorId || '');

  if (error) {
    return (
      <Paper className="p-4">
        <Typography color="error">
          {t('tracking.history.error')}
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className="p-4">
      <Typography variant="h4" gutterBottom>
        {t('tracking.history.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('tracking.history.description')}
      </Typography>

      {data && (
        <TrackingTimeline
          data={data}
          isLoading={isLoading}
        />
      )}
    </Paper>
  );
}; 