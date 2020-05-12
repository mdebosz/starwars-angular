import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Game } from '../models';
import * as GamesActions from './games.actions';

export interface GamesState extends EntityState<Game> {
  selectedId: string;
  leftPlayerCardId: number;
  rightPlayerCardId: number;
  loading: boolean;
  loaded: boolean;
}

export const gamesAdapter: EntityAdapter<Game> = createEntityAdapter<Game>({
  selectId: (game: Game) => game.id
});

const initialState: GamesState = gamesAdapter.getInitialState({
  selectedId: null,
  leftPlayerCardId: null,
  rightPlayerCardId: null,
  loading: false,
  loaded: false
});

const reducer = createReducer(
  initialState,

  on(GamesActions.startGame, (state) => ({
    ...state,
    loading: true
  })),

  on(GamesActions.select, (state, { id }) => ({
    ...state,
    selectedId: id
  })),

  on(
    GamesActions.drawPeopleCards,
    GamesActions.drawStarshipsCards,
    (state, { cards }) => ({
      ...state,
      leftPlayerCardId: cards.leftPlayerCardId,
      rightPlayerCardId: cards.rightPlayerCardId
    })
  ),

  on(
    GamesActions.drawPeopleCardsFailure,
    GamesActions.drawStarshipsCardsFailure,
    (state, { error }) => ({
      ...state,
      leftPlayerCardId: null,
      rightPlayerCardId: null,
      loading: false
    })
  ),

  on(GamesActions.showResults, (state, { results }) =>
    gamesAdapter.upsertOne(results, {
      ...state,
      loading: false,
      loaded: true
    })
  )
);

export function gamesReducer(
  state: GamesState,
  action: GamesActions.GamesActionsUnion
) {
  return reducer(state, action);
}
