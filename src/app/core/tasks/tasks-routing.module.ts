import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksLayoutComponent } from './tasks-layout.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksLayoutComponent,
    children: [
      { path: '', redirectTo: 'alltasks', pathMatch: 'full' },
      { path: 'alltasks', component: AllTasksComponent },
      { path: '**', redirectTo: 'alltasks' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
