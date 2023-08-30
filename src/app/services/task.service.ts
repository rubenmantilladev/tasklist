import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUri = environment.uri;
  userId = 1;
  private http = inject(HttpClient);

  getTasksByUserId() {
    return this.http.get(`${this.apiUri}/users/${this.userId}/tasks`);
  }

  getTaskId(id: number) {
    return this.http.get(`${this.apiUri}/users/${this.userId}/tasks?id=${id}`);
  }

  createTask(task: Task) {
    return this.http.post(`${this.apiUri}/tasks`, task);
  }

  updateTask(task: Task) {
    return this.http.patch(`${this.apiUri}/tasks/${task.id}`, task);
  }
}
