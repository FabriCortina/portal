import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { TrackingCard } from './TrackingCard';
import { CollaboratorTracking } from '../../types/tracking';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

interface TrackingTimelineProps {
  data: CollaboratorTracking;
  isLoading: boolean;
}

export const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ data, isLoading }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'es' ? es : enUS;

  if (isLoading) {
    return (
      <Box className="flex justify-center items-center h-64">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="p-4">
      <Box className="mb-8">
        <Typography variant="h5" gutterBottom>
          {data.collaborator.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {data.collaborator.role}
        </Typography>
      </Box>

      <Timeline position="alternate">
        {data.trackings.map((tracking, index) => (
          <TimelineItem key={tracking.id}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < data.trackings.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Box className="mb-4">
                <Typography variant="subtitle2" color="textSecondary">
                  {format(new Date(tracking.createdAt), 'PPP', { locale })}
                </Typography>
                <TrackingCard tracking={tracking} />
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}; 