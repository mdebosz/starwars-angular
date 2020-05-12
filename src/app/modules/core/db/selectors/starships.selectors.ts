import { Dictionary } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { StarshipDto } from 'app/api/models/starship-dto';

import { DbState, getDbState } from '../reducers';
import { starshipsAdapter, StarshipsState } from '../reducers/starships.reducer';

export const getStarshipsState = createSelector(
  getDbState,
  (state: DbState) => state?.starships
);

export const {
  selectIds: getStarshipsIds,
  selectEntities: getStarshipsEntities,
  selectAll: getStarshipsAll,
  selectTotal: getStarshipsTotal
} = starshipsAdapter.getSelectors(getStarshipsState);

export const getStarshipsCount = createSelector(
  getStarshipsState,
  (state: StarshipsState) => state?.count
);

export const getStarshipsCountLoaded = createSelector(
  getStarshipsCount,
  (count: number) => !!count
);

export const getStarship = createSelector(
  getStarshipsEntities,
  (entities: Dictionary<StarshipDto>, { id }: { id: number }) =>
    !!entities && entities[id]
);
