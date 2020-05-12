import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { peopleReducer, PeopleState } from './people.reducer';
import { starshipsReducer, StarshipsState } from './starships.reducer';

export interface DbState {
  people: PeopleState;
  starships: StarshipsState;
}

interface State {
  db: DbState;
}

export const reducers: ActionReducerMap<DbState, any> = {
  people: peopleReducer,
  starships: starshipsReducer
};

export const getDbState = createFeatureSelector<State, DbState>('db');
