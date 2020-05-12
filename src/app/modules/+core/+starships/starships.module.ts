import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatchLayoutModule, ScoreTableModule, StarshipCardModule } from 'app/shared/components';

import { StarshipsPageComponent } from './starships.page';
import { RoutingModule } from './starships.routing';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    MatchLayoutModule,
    StarshipCardModule,
    ScoreTableModule
  ],
  exports: [],
  declarations: [StarshipsPageComponent],
  providers: []
})
export class StarshipsModule {}
