export interface RoleDistribution {
  role: string;
  count: number;
  percentage: number;
}

export interface ProvinceDistribution {
  province: string;
  count: number;
  percentage: number;
}

export interface ClientDistribution {
  client: string;
  count: number;
  percentage: number;
}

export interface GenderDistribution {
  gender: string;
  count: number;
  percentage: number;
}

export interface HistoricalMetrics {
  date: Date;
  activeCollaborators: number;
  turnoverRate: number;
  satisfactionRate: number;
  completedSprints: number;
}

export interface Collaborator {
  id: string;
  name: string;
  role: string;
  province: string;
  isActive: boolean;
  client?: string;
  gender?: string;
}

export interface DashboardMetrics {
  totalActiveCollaborators: number;
  averageTurnoverRate: number;
  averageSatisfactionRate: number;
  completedSprints: number;
  roleDistribution: RoleDistribution[];
  provinceDistribution: ProvinceDistribution[];
  clientDistribution: ClientDistribution[];
  genderDistribution: GenderDistribution[];
  historicalMetrics: HistoricalMetrics[];
  activeCollaborators: Collaborator[];
}

export interface Widget {
  id: string;
  type: 'kpi' | 'chart' | 'list';
  title: string;
  position: number;
  config: {
    metricType?: 'turnover' | 'satisfaction' | 'sprints';
    chartType?: 'pie' | 'bar' | 'line';
    dataType?: 'roles' | 'provinces' | 'clients' | 'genders';
  };
}

export interface DashboardState {
  metrics: DashboardMetrics | null;
  widgets: Widget[];
  isLoading: boolean;
  error: string | null;
} 