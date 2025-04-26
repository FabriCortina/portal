import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDashboardStore } from '@/stores/dashboard.store';
import { KpiWidget } from '@/components/dashboard/KpiWidget';
import { ChartWidget } from '@/components/dashboard/ChartWidget';
import { DraggableWidget } from '@/components/dashboard/DraggableWidget';
import { CollaboratorsList } from '@/components/dashboard/CollaboratorsList';

export const Dashboard: React.FC = () => {
  const { metrics, widgets, isLoading, error, fetchMetrics } = useDashboardStore();

  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!metrics) {
    return null;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* KPIs */}
          <DraggableWidget widget={{ id: 'kpi-1', type: 'kpi', title: 'Colaboradores Activos', position: 0 }}>
            <KpiWidget
              title="Colaboradores Activos"
              value={metrics.totalActiveCollaborators}
            />
          </DraggableWidget>

          <DraggableWidget widget={{ id: 'kpi-2', type: 'kpi', title: 'Rotación', position: 1 }}>
            <KpiWidget
              title="Rotación Promedio"
              value={metrics.averageTurnoverRate}
              unit="%"
            />
          </DraggableWidget>

          <DraggableWidget widget={{ id: 'kpi-3', type: 'kpi', title: 'Satisfacción', position: 2 }}>
            <KpiWidget
              title="Satisfacción Promedio"
              value={metrics.averageSatisfactionRate}
              unit="%"
            />
          </DraggableWidget>

          <DraggableWidget widget={{ id: 'kpi-4', type: 'kpi', title: 'Sprints Completados', position: 3 }}>
            <KpiWidget
              title="Sprints Completados"
              value={metrics.completedSprints}
            />
          </DraggableWidget>

          {/* Gráficos */}
          <DraggableWidget widget={{ id: 'chart-1', type: 'chart', title: 'Distribución por Roles', position: 4 }}>
            <ChartWidget
              title="Distribución por Roles"
              type="pie"
              data={metrics.roleDistribution}
              dataKey="role"
              valueKey="count"
            />
          </DraggableWidget>

          <DraggableWidget widget={{ id: 'chart-2', type: 'chart', title: 'Distribución por Provincias', position: 5 }}>
            <ChartWidget
              title="Distribución por Provincias"
              type="bar"
              data={metrics.provinceDistribution}
              dataKey="province"
              valueKey="count"
            />
          </DraggableWidget>

          <DraggableWidget widget={{ id: 'chart-3', type: 'chart', title: 'Distribución por Clientes', position: 6 }}>
            <ChartWidget
              title="Distribución por Clientes"
              type="pie"
              data={metrics.clientDistribution}
              dataKey="client"
              valueKey="count"
            />
          </DraggableWidget>

          <DraggableWidget widget={{ id: 'chart-4', type: 'chart', title: 'Distribución por Género', position: 7 }}>
            <ChartWidget
              title="Distribución por Género"
              type="pie"
              data={metrics.genderDistribution}
              dataKey="gender"
              valueKey="count"
            />
          </DraggableWidget>

          <DraggableWidget widget={{ id: 'chart-5', type: 'chart', title: 'Métricas Históricas', position: 8 }}>
            <ChartWidget
              title="Métricas Históricas"
              type="line"
              data={metrics.historicalMetrics}
              dataKey="date"
              valueKey="activeCollaborators"
            />
          </DraggableWidget>

          {/* Lista de Colaboradores */}
          <DraggableWidget widget={{ id: 'list-1', type: 'list', title: 'Colaboradores Activos', position: 9 }}>
            <CollaboratorsList collaborators={metrics.activeCollaborators} />
          </DraggableWidget>
        </div>
      </div>
    </DndProvider>
  );
}; 