export interface CollaboratorMetrics {
  collaborator: {
    id: string;
    name: string;
    role: string;
  };
  metrics: {
    rotation: {
      date: string;
      value: number;
    }[];
    satisfaction: {
      date: string;
      value: number;
    }[];
    sprintCompletion: {
      date: string;
      value: number;
    }[];
    averageBugs: {
      date: string;
      value: number;
    }[];
  };
} 