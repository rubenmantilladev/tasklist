import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUri = environment.uri;
  private http = inject(HttpClient);

  getAllTasks() {
    return this.http.get<Task[]>(`${this.apiUri}/tasks`);
  }

  createTask(task: Task) {
    return this.http.post(`${this.apiUri}/tasks`, task);
  }

  updateTask(task: Task) {
    return this.http.patch(`${this.apiUri}/tasks/${task.id}`, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.apiUri}/tasks/${taskId}`);
  }
}
