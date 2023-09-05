import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { AddNewTaskComponent } from '../add-new-task/add-new-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() tasks = new EventEmitter<Task[]>();
  private taskService = inject(TaskService);

  constructor(public dialog: MatDialog) {}

  updateTask(task: Task): void {
    console.log(task);
    this.taskService.updateTask(task);
  }

  openDialog(task: Task) {
    this.dialog.open(AddNewTaskComponent, {
      data: task,
    });
    this.dialog.afterAllClosed.subscribe({
      next: () => {
        this.taskService.updateTask(task);
        this.taskService.getAllTasks().subscribe({
          next: (dataTasks) => {
            this.tasks.emit(dataTasks);
          },
        });
      },
    });
  }

  deleteTask(id: number | undefined): void {
    if (!id) return;
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.taskService.getAllTasks().subscribe({
          next: (dataTasks) => {
            this.tasks.emit(dataTasks);
          },
        });
      },
    });
  }
}
