import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'quis', loadChildren: () => import('./features/quis/quis.module').then(m => m.QuisModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
