import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GamesEffects } from './games.effects';
import { gamesReducer } from './games.reducer';
import { gamesSelectorName } from './games.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(gamesSelectorName, gamesReducer),
    EffectsModule.forFeature([GamesEffects])
  ],
  exports: []
})
export class GamesStoreModule {}
