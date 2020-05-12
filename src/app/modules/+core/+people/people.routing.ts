import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleCountLoadedGuard } from 'app/modules/core/db/guards';

import { PeoplePageComponent } from './people.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [PeopleCountLoadedGuard],
    component: PeoplePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
