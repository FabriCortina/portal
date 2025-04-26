import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { useDashboardMetrics } from '../../../hooks/useDashboard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const MetricsWidget: React.FC = () => {
  const { t } = useTranslation();
  const { data: metrics, isLoading } = useDashboardMetrics();

  if (isLoading) {
    return (
      <Paper className="p-4">
        <Typography variant="h6" gutterBottom>
          {t('dashboard.metrics.title')}
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
        {t('dashboard.metrics.title')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            {t('dashboard.metrics.roleDistribution')}
          </Typography>
          <PieChart width={400} height={300}>
            <Pie
              data={metrics?.roleDistribution}
              cx={200}
              cy={150}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
            >
              {metrics?.roleDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            {t('dashboard.metrics.marketComparison')}
          </Typography>
          <BarChart
            width={400}
            height={300}
            data={metrics?.marketComparison}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="client" fill="#8884d8" name={t('dashboard.metrics.client')} />
            <Bar dataKey="market" fill="#82ca9d" name={t('dashboard.metrics.market')} />
          </BarChart>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            {t('dashboard.metrics.trends')}
          </Typography>
          <LineChart
            width={800}
            height={300}
            data={metrics?.marketComparison}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="client" stroke="#8884d8" name={t('dashboard.metrics.client')} />
            <Line type="monotone" dataKey="market" stroke="#82ca9d" name={t('dashboard.metrics.market')} />
          </LineChart>
        </Grid>
      </Grid>
    </Paper>
  );
}; 