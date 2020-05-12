import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatchLayoutModule, PersonCardModule, ScoreTableModule } from 'app/shared/components';

import { PeoplePageComponent } from './people.page';
import { RoutingModule } from './people.routing';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    MatchLayoutModule,
    PersonCardModule,
    ScoreTableModule
  ],
  exports: [],
  declarations: [PeoplePageComponent],
  providers: []
})
export class PeopleModule {}
