import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { Tracking } from '../../types/tracking';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

export const TrackingCard: React.FC<{ tracking: Tracking }> = ({ tracking }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'es' ? es : enUS;

  return (
    <Paper
      className="p-4 mb-4"
      elevation={2}
      role="article"
      aria-label={`Seguimiento del ${format(new Date(tracking.createdAt), 'PPP', { locale })}`}
    >
      <Box className="flex justify-between items-start mb-4">
        <Typography variant="subtitle2" color="textSecondary">
          {format(new Date(tracking.createdAt), 'PPP', { locale })}
        </Typography>
        <Box className="flex space-x-2">
          <Chip
            label={`${tracking.sprintPercentage}%`}
            color="primary"
            size="small"
            aria-label={`Porcentaje de sprint: ${tracking.sprintPercentage}%`}
          />
          <Chip
            label={`${tracking.bugsCount} bugs`}
            color="secondary"
            size="small"
            aria-label={`Cantidad de bugs: ${tracking.bugsCount}`}
          />
        </Box>
      </Box>

      <Box className="space-y-2">
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            {t('tracking.feedback')}
          </Typography>
          <Typography variant="body1">{tracking.feedback}</Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom>
            {t('tracking.last15DaysSatisfaction')}
          </Typography>
          <Box className="flex items-center">
            <Box
              className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={tracking.last15DaysSatisfaction}
              aria-valuemin={1}
              aria-valuemax={5}
            >
              <Box
                className="h-full bg-primary"
                style={{ width: `${(tracking.last15DaysSatisfaction / 5) * 100}%` }}
              />
            </Box>
            <Typography variant="body2" className="ml-2">
              {tracking.last15DaysSatisfaction}/5
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom>
            {t('tracking.issuesToResolve')}
          </Typography>
          <Typography variant="body1">{tracking.issuesToResolve}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}; 