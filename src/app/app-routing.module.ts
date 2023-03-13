import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { TokenGuard } from './auth/guards/token.guard';
import { UserResolver } from './shared/resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [TokenGuard],
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        resolve: {
          user: UserResolver,
        },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
