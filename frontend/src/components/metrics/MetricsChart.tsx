import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CollaboratorMetrics } from '../../types/metrics';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

interface MetricsChartProps {
  data: CollaboratorMetrics;
  metricType: 'rotation' | 'satisfaction' | 'sprintCompletion' | 'averageBugs';
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data, metricType }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'es' ? es : enUS;

  const chartData = data.metrics[metricType].map((point) => ({
    date: format(new Date(point.date), 'dd/MM/yyyy', { locale }),
    value: point.value,
  }));

  const getMetricConfig = () => {
    switch (metricType) {
      case 'rotation':
        return {
          title: t('metrics.rotation'),
          color: '#0088FE',
          domain: [0, 100],
          suffix: '%',
        };
      case 'satisfaction':
        return {
          title: t('metrics.satisfaction'),
          color: '#00C49F',
          domain: [1, 5],
          suffix: '/5',
        };
      case 'sprintCompletion':
        return {
          title: t('metrics.sprintCompletion'),
          color: '#FFBB28',
          domain: [0, 100],
          suffix: '%',
        };
      case 'averageBugs':
        return {
          title: t('metrics.averageBugs'),
          color: '#FF8042',
          domain: [0, 'auto'],
          suffix: '',
        };
      default:
        return {
          title: '',
          color: '#000000',
          domain: [0, 100],
          suffix: '',
        };
    }
  };

  const config = getMetricConfig();

  return (
    <Paper className="p-4" elevation={2}>
      <Typography variant="h6" gutterBottom>
        {config.title}
      </Typography>
      <Box className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              label={{
                value: t('metrics.date'),
                position: 'insideBottom',
                offset: -10,
              }}
            />
            <YAxis
              domain={config.domain}
              tickFormatter={(value) => `${value}${config.suffix}`}
              label={{
                value: config.title,
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip
              formatter={(value: number) => [`${value}${config.suffix}`, config.title]}
              labelFormatter={(label) => t('metrics.date') + ': ' + label}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke={config.color}
              name={config.title}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}; 