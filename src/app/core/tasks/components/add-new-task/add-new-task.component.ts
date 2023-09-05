import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task, TaskPriority, TaskStatus } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent {
  private taskService = inject(TaskService);

  taskStatus: TaskStatus[] = [
    TaskStatus.NOT_STARTED,
    TaskStatus.IN_PROGRESS,
    TaskStatus.COMPLETED,
  ];

  taskPriority: TaskPriority[] = [
    TaskPriority.HIGH,
    TaskPriority.MEDIUM,
    TaskPriority.LOW,
  ];

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    status: new FormControl('', []),
    priority: new FormControl('', []),
  });

  constructor(
    public dialogRef: MatDialogRef<AddNewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {}

  addNewTask(): void {
    if (!this.taskForm.valid) {
      return;
    }
    if (this.taskForm.value.status === '') {
      this.taskForm.value.status = TaskStatus.NOT_STARTED;
    }
    if (this.taskForm.value.priority === '') {
      this.taskForm.value.priority = TaskPriority.LOW;
    }

    const newTask: Task = {
      title: this.taskForm.value.title || '',
      due_date: new Date(),
      status: this.taskForm.value.status || '',
      priority: this.taskForm.value.priority || '',
    };

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.dialogRef.close();
      },
    });
  }
}
