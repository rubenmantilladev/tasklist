export interface Task {
  id?: number;
  userId: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export enum TaskStatus {
  IN_PROGRESS = 'in_progress',
  NOT_STARTED = 'not_started',
  COMPLETED = 'completed',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
