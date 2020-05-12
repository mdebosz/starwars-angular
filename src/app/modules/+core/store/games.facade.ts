import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as GamesActions from 'app/modules/+core/store/games.actions';
import { Observable } from 'rxjs';

import { Game, GameType } from '../models';
import {
  getGamesLeftPlayerCardId,
  getGamesLoaded,
  getGamesLoading,
  getGamesRightPlayerCardId,
  getGamesSelected,
  getLeftPlayerWonMatches,
  getRightPlayerWonMatches,
} from './games.selectors';

@Injectable({
  providedIn: 'root'
})
export class GamesFacade {
  leftPlayerCardId$: Observable<number> = this.store.pipe(
    select(getGamesLeftPlayerCardId)
  );

  rightPlayerCardId$: Observable<number> = this.store.pipe(
    select(getGamesRightPlayerCardId)
  );

  selected$: Observable<Game> = this.store.pipe(select(getGamesSelected));

  leftPlayerWonMatches$ = this.store.pipe(select(getLeftPlayerWonMatches));

  rightPlayerWonMatches$ = this.store.pipe(select(getRightPlayerWonMatches));

  gamesLoading$: Observable<boolean> = this.store.pipe(select(getGamesLoading));

  gamesLoaded$: Observable<boolean> = this.store.pipe(select(getGamesLoaded));

  constructor(private store: Store) {}

  startGame(gameType: GameType) {
    this.store.dispatch(GamesActions.startGame({ gameType }));
  }
}
