import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: 'search',
        loadComponent: () => import('./features/tv-shows/components/tv-show-search/tv-show-search.component')
        .then(m => m.TvShowSearchComponent),
        title: 'Search TV Shows',
    },
    {
        path: 'all',
        loadComponent: () => import('./features/tv-shows/components/all-shows/all-shows.component')
            .then(m => m.AllShowsComponent),
        title: 'All Shows',
      },
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    { path: '**', pathMatch: 'full', redirectTo: 'all' },
  ]