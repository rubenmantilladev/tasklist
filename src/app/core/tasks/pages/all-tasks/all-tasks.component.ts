import { Component, inject } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { AddNewTaskComponent } from '../../components/add-new-task/add-new-task.component';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent {
  tasks!: Task[];
  private taskServive = inject(TaskService);

  constructor(public dialog: MatDialog) {
    this.taskServive.getAllTasks().subscribe({
      next: (dataTasks) => {
        this.tasks = dataTasks;
      },
    });
  }

  reloadTasks(tasks: Task[]) {
    this.taskServive.getAllTasks().subscribe({
      next: () => {
        this.tasks = tasks;
      },
    });
  }

  openDialog() {
    this.dialog.open(AddNewTaskComponent);
    this.dialog.afterAllClosed.subscribe({
      next: () => {
        this.taskServive.getAllTasks().subscribe({
          next: (dataTasks) => {
            this.tasks = dataTasks;
          },
        });
      },
    });
  }
}
