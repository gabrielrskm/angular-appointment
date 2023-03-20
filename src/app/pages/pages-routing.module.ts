import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'auth', component: AuthComponent },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'appointment',
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
