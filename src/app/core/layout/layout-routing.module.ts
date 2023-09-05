import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    pathMatch: 'prefix',
    children: [
      /* {
        path: '',
        component: HomeComponent,
      }, */
      {
        path: '',
        loadChildren: () =>
          import('../tasks/tasks.module').then((m) => m.TasksModule),
      },
    ],
  },
  { path: '**', redirectTo: 'tasks' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
