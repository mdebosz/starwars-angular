import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PersonDto } from 'app/api/models';
import { Observable } from 'rxjs';

import { PeopleActions } from '../actions';
import { getPeopleCount, getPeopleCountLoaded, getPerson } from '../selectors/people.selectors';

@Injectable({
  providedIn: 'root'
})
export class PeopleFacade {
  peopleCount$: Observable<number> = this.store.pipe(select(getPeopleCount));

  peopleCountLoaded$: Observable<boolean> = this.store.pipe(
    select(getPeopleCountLoaded)
  );

  constructor(private store: Store) {}

  getCount() {
    this.store.dispatch(PeopleActions.getCount());
  }

  getPerson$(id): Observable<PersonDto> {
    return this.store.pipe(select(getPerson, { id }));
  }
}
