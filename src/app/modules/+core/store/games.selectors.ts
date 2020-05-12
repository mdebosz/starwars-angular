import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Game } from '../models';
import { gamesAdapter, GamesState } from './games.reducer';

export const gamesSelectorName = 'games';
export const getGamesState = createFeatureSelector<GamesState>(
  gamesSelectorName
);

export const {
  selectIds: getGamesIds,
  selectEntities: getGamesEntities,
  selectAll: selectAllGames,
  selectTotal: getGamesTotal
} = gamesAdapter.getSelectors(getGamesState);

export const getGamesLoading = createSelector(
  getGamesState,
  (state) => state?.loading
);

export const getGamesLoaded = createSelector(
  getGamesState,
  (state) => state?.loaded
);

export const getGamesSelectedId = createSelector(
  getGamesState,
  (state) => state?.selectedId
);

export const getGamesSelected = createSelector(
  getGamesEntities,
  getGamesSelectedId,
  (entities: Dictionary<Game>, id: string) => !!entities && entities[id]
);

export const getGamesLeftPlayerCardId = createSelector(
  getGamesState,
  (state) => state?.leftPlayerCardId
);

export const getGamesRightPlayerCardId = createSelector(
  getGamesState,
  (state) => state?.rightPlayerCardId
);

export const getLeftPlayerWonMatches = createSelector(
  selectAllGames,
  (games: Game[]) => games?.filter(({ leftWin }: Game) => !!leftWin).length
);

export const getRightPlayerWonMatches = createSelector(
  selectAllGames,
  (games: Game[]) => games?.filter(({ rightWin }: Game) => !!rightWin).length
);
