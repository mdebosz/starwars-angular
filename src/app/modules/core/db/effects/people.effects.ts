import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersonDto } from 'app/api/models/person-dto';
import { PeopleService } from 'app/api/services/people.service';
import { GamesActions } from 'app/modules/+core/store';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap, pluck, switchMap } from 'rxjs/operators';

import { PeopleActions } from '../actions';

@Injectable()
export class PeopleEffects {
  drawPeopleCards = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.drawPeopleCards),
      pluck('cards'),
      mergeMap(({ leftPlayerCardId, rightPlayerCardId }) =>
        forkJoin([
          this.service.getPerson(leftPlayerCardId),
          this.service.getPerson(rightPlayerCardId)
        ]).pipe(
          map(([leftPerson, rightPerson]: [PersonDto, PersonDto]) =>
            GamesActions.drawPeopleCardsSuccess({
              people: [
                { id: leftPlayerCardId, ...leftPerson },
                { id: rightPlayerCardId, ...rightPerson }
              ]
            })
          ),
          catchError((error) =>
            of(GamesActions.drawPeopleCardsFailure({ error }))
          )
        )
      )
    )
  );

  getCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.getCount),
      switchMap(() =>
        this.service.getPeoplePage().pipe(
          pluck('count'),
          map((count: number) => {
            return PeopleActions.getCountSuccess({ count });
          }),
          catchError((error) => of(PeopleActions.getCountFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: PeopleService) {}
}
