import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { StarshipDto } from 'app/api/models';
import * as GamesActions from 'app/modules/+core/store/games.actions';

import { StarshipsActions } from '../actions';

export interface StarshipsState extends EntityState<StarshipDto> {
  count: number;
}

export const starshipsAdapter: EntityAdapter<StarshipDto> = createEntityAdapter<
  StarshipDto
>({
  selectId: (starship: StarshipDto) => starship.id
});

const initialState: StarshipsState = starshipsAdapter.getInitialState({
  count: null
});

const reducer = createReducer(
  initialState,

  on(GamesActions.drawStarshipsCardsSuccess, (state, { starships }) =>
    starshipsAdapter.upsertMany(starships, state)
  ),

  on(StarshipsActions.getCountSuccess, (state, { count }) => ({
    ...state,
    count
  }))
);

export function starshipsReducer(
  state: StarshipsState,
  action: StarshipsActions.StarshipsActionsUnion
) {
  return reducer(state, action);
}
