import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guard/guard-fn.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'auth', component: AuthComponent },
      {
        path: 'dashboard',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'appointment',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./appointment/appointment.module').then(
            (m) => m.AppointmentModule
          ),
      },
      { path: '**', redirectTo: 'auth' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
