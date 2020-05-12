import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsCountLoadedGuard } from 'app/modules/core/db/guards';

import { StarshipsPageComponent } from './starships.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [StarshipsCountLoadedGuard],
    component: StarshipsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
