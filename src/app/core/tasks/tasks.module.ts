import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksLayoutComponent } from './tasks-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { TaskService } from 'src/app/services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component';

@NgModule({
  declarations: [
    TasksLayoutComponent,
    TaskCardComponent,
    AllTasksComponent,
    AddNewTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
})
export class TasksModule {}
