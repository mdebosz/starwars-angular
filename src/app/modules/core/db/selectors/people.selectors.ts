import { Dictionary } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { PersonDto } from 'app/api/models/person-dto';

import { DbState, getDbState } from '../reducers';
import { peopleAdapter, PeopleState } from '../reducers/people.reducer';

export const getPeopleState = createSelector(
  getDbState,
  (state: DbState) => state?.people
);

export const {
  selectIds: getPeopleIds,
  selectEntities: getPeopleEntities,
  selectAll: getPeopleAll,
  selectTotal: getPeopleTotal
} = peopleAdapter.getSelectors(getPeopleState);

export const getPeopleCount = createSelector(
  getPeopleState,
  (state: PeopleState) => state?.count
);

export const getPeopleCountLoaded = createSelector(
  getPeopleCount,
  (count: number) => !!count
);

export const getPerson = createSelector(
  getPeopleEntities,
  (entities: Dictionary<PersonDto>, { id }: { id: number }) =>
    !!entities && entities[id]
);
