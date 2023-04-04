import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, authGuardAdmin } from './core/guard/guard-fn.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule),
      canActivate: [authGuardAdmin]
  },
  {
    path : 'appointment',
    loadChildren: () => import('./appointment/appointment.module')
      .then(m => m.AppointmentModule),
      canActivate: [authGuard]
  },
  {
    path : '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
