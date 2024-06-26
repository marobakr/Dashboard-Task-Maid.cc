import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { detailsResolver } from './core/guards/details.resolver';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    resolve: { details: detailsResolver },
    path: 'details/:id',
    loadComponent: () =>
      import('./core/pages/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
