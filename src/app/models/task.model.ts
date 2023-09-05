export interface Task {
  id?: number;
  userId?: number;
  categoryId?: number;
  title: string;
  due_date: Date;
  status: string;
  priority: string;
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
