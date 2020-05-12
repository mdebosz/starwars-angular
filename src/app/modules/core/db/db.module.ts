import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PeopleEffects } from './effects/people.effects';
import { StarshipsEffects } from './effects/starships.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('db', reducers),
    EffectsModule.forFeature([PeopleEffects, StarshipsEffects])
  ]
})
export class DbModule {}
