import { create } from 'zustand';
import axios from 'axios';
import { DashboardState, DashboardMetrics, Widget } from '../types/dashboard.types';

interface DashboardStore extends DashboardState {
  fetchMetrics: () => Promise<void>;
  updateWidgetPosition: (widgetId: string, newPosition: number) => Promise<void>;
  addWidget: (widget: Omit<Widget, 'id' | 'position'>) => Promise<void>;
  removeWidget: (widgetId: string) => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  metrics: null,
  widgets: [],
  isLoading: false,
  error: null,

  fetchMetrics: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<DashboardMetrics>('/api/dashboard/metrics');
      set({ metrics: response.data, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Error al cargar métricas', 
        isLoading: false 
      });
    }
  },

  updateWidgetPosition: async (widgetId: string, newPosition: number) => {
    const { widgets } = get();
    const updatedWidgets = widgets.map(widget => 
      widget.id === widgetId ? { ...widget, position: newPosition } : widget
    );
    
    try {
      await axios.put(`/api/dashboard/widgets/${widgetId}/position`, { position: newPosition });
      set({ widgets: updatedWidgets });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Error al actualizar posición del widget' 
      });
    }
  },

  addWidget: async (widget: Omit<Widget, 'id' | 'position'>) => {
    try {
      const response = await axios.post<Widget>('/api/dashboard/widgets', widget);
      set(state => ({ 
        widgets: [...state.widgets, response.data] 
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Error al agregar widget' 
      });
    }
  },

  removeWidget: async (widgetId: string) => {
    try {
      await axios.delete(`/api/dashboard/widgets/${widgetId}`);
      set(state => ({ 
        widgets: state.widgets.filter(w => w.id !== widgetId) 
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Error al eliminar widget' 
      });
    }
  }
})); 