import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Tabs, Tab, Box, Typography } from '@mui/material';
import { TrackingForm } from '../../components/operations/TrackingForm';
import { QueryForm } from '../../components/operations/QueryForm';
import { MarketMetricsForm } from '../../components/operations/MarketMetricsForm';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`operations-tabpanel-${index}`}
      aria-labelledby={`operations-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const OperationsPage: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper className="p-6">
      <Typography variant="h4" component="h1" gutterBottom>
        {t('operations.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('operations.description')}
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="operations tabs"
          variant="fullWidth"
        >
          <Tab label={t('operations.tracking')} id="operations-tab-0" />
          <Tab label={t('operations.queries')} id="operations-tab-1" />
          <Tab label={t('operations.metrics')} id="operations-tab-2" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <TrackingForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QueryForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MarketMetricsForm />
      </TabPanel>
    </Paper>
  );
}; 