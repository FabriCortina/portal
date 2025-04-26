export interface Tracking {
  id: string;
  collaboratorId: string;
  sprintPercentage: number;
  bugsCount: number;
  feedback: string;
  last15DaysSatisfaction: number;
  issuesToResolve: string;
  createdAt: string;
  updatedAt: string;
}

export interface CollaboratorTracking {
  collaborator: {
    id: string;
    name: string;
    role: string;
  };
  trackings: Tracking[];
} 