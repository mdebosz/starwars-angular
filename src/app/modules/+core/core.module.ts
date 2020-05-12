import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DbModule } from 'app/modules/core';
import { NavbarModule, PersonCardModule } from 'app/shared/components';

import { HomePageComponent } from './containers';
import { CorePageComponent } from './core.page';
import { RoutingModule } from './core.routing';
import { GamesStoreModule } from './store';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    RoutingModule,
    DbModule,
    NavbarModule,
    GamesStoreModule,
    PersonCardModule
  ],
  exports: [],
  declarations: [HomePageComponent, CorePageComponent],
  providers: []
})
export class CoreModule {}
