import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { UsersComponent } from './works/users/users.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TaskComponent } from './works/task/task.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'works/cenzor', component: CenzorComponent },
  { path: 'works/users', component: UsersComponent },
  { path: 'works/task', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
