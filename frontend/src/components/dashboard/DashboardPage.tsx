import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Paper, Typography } from '@mui/material';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { CollaboratorsWidget } from './widgets/CollaboratorsWidget';
import { MetricsWidget } from './widgets/MetricsWidget';
import { useDashboardConfig } from '../../hooks/useDashboard';
import { DashboardWidget } from '../../types/dashboard';

const ResponsiveGridLayout = WidthProvider(Responsive);

export const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { config, updateConfig } = useDashboardConfig();

  const onLayoutChange = useCallback(
    (newLayout: any) => {
      if (config) {
        const updatedWidgets = config.widgets.map((widget) => {
          const newLayoutItem = newLayout.find((item: any) => item.i === widget.id);
          if (newLayoutItem) {
            return {
              ...widget,
              position: {
                x: newLayoutItem.x,
                y: newLayoutItem.y,
                w: newLayoutItem.w,
                h: newLayoutItem.h,
              },
            };
          }
          return widget;
        });

        updateConfig.mutate({
          ...config,
          widgets: updatedWidgets,
        });
      }
    },
    [config, updateConfig]
  );

  const renderWidget = (widget: DashboardWidget) => {
    switch (widget.type) {
      case 'collaborators':
        return <CollaboratorsWidget />;
      case 'rotation':
      case 'satisfaction':
      case 'roles':
      case 'market':
        return <MetricsWidget />;
      default:
        return null;
    }
  };

  if (!config) {
    return (
      <Paper className="p-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </Paper>
    );
  }

  return (
    <Paper className="p-4">
      <Typography variant="h4" gutterBottom>
        {t('dashboard.title')}
      </Typography>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: config.widgets.map((widget) => ({
          i: widget.id,
          x: widget.position.x,
          y: widget.position.y,
          w: widget.position.w,
          h: widget.position.h,
        })) }}
        onLayoutChange={onLayoutChange}
        rowHeight={100}
        isDraggable
        isResizable
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {config.widgets.map((widget) => (
          <div key={widget.id} data-grid={widget.position}>
            {renderWidget(widget)}
          </div>
        ))}
      </ResponsiveGridLayout>
    </Paper>
  );
}; 