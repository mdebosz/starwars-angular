import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PersonDto } from 'app/api/models';
import * as GamesActions from 'app/modules/+core/store/games.actions';

import { PeopleActions } from '../actions';

export interface PeopleState extends EntityState<PersonDto> {
  count: number;
}

export const peopleAdapter: EntityAdapter<PersonDto> = createEntityAdapter<
  PersonDto
>({
  selectId: (person: PersonDto) => person.id
});

const initialState: PeopleState = peopleAdapter.getInitialState({
  count: null
});

const reducer = createReducer(
  initialState,

  on(GamesActions.drawPeopleCardsSuccess, (state, { people }) =>
    peopleAdapter.upsertMany(people, state)
  ),

  on(PeopleActions.getCountSuccess, (state, { count }) => ({ ...state, count }))
);

export function peopleReducer(
  state: PeopleState,
  action: PeopleActions.PeopleActionsUnion
) {
  return reducer(state, action);
}
