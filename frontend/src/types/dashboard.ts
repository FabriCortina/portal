export interface Collaborator {
  id: string;
  name: string;
  role: string;
  status: string;
  satisfaction: number;
}

export interface DashboardMetrics {
  averageRotation: number;
  averageSatisfaction: number;
  roleDistribution: {
    role: string;
    count: number;
  }[];
  marketComparison: {
    metric: string;
    client: number;
    market: number;
  }[];
}

export interface DashboardWidget {
  id: string;
  type: 'collaborators' | 'rotation' | 'satisfaction' | 'roles' | 'market';
  position: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface DashboardConfig {
  widgets: DashboardWidget[];
  tenantId: string;
} 