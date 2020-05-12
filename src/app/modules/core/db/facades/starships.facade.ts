import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { StarshipDto } from 'app/api/models';
import { Observable } from 'rxjs';

import { StarshipsActions } from '../actions';
import { getStarship, getStarshipsCount, getStarshipsCountLoaded } from '../selectors/starships.selectors';

@Injectable({
  providedIn: 'root'
})
export class StarshipsFacade {
  starshipsCount$: Observable<number> = this.store.pipe(
    select(getStarshipsCount)
  );

  starshipCountLoaded$: Observable<boolean> = this.store.pipe(
    select(getStarshipsCountLoaded)
  );

  constructor(private store: Store) {}

  getCount() {
    this.store.dispatch(StarshipsActions.getCount());
  }

  getStarship$(id): Observable<StarshipDto> {
    return this.store.pipe(select(getStarship, { id }));
  }
}
