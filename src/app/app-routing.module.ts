import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'menu-page',
    loadChildren: () =>
      import('./pages/menu-page/menu-page.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'log-in',
    loadChildren: () =>
      import('./pages/log-in/log-in.module').then((m) => m.LogInModule),
  },
  {
    path: 'verdict',
    loadChildren: () =>
      import('./pages/verdict/verdict.module').then((m) => m.VerdictModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.module').then((m) => m.AboutPageModule),
  },
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
