import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './containers';
import { CorePageComponent } from './core.page';

const routes: Routes = [
  {
    path: '',
    component: CorePageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'people',
        loadChildren: () =>
          import('./+people/people.module').then((m) => m.PeopleModule)
      },
      {
        path: 'starships',
        loadChildren: () =>
          import('./+starships/starships.module').then((m) => m.StarshipsModule)
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
