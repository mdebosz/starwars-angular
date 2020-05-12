import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StarshipDto } from 'app/api/models/starship-dto';
import { StarshipsService } from 'app/api/services/starships.service';
import { GamesActions } from 'app/modules/+core/store';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap, pluck } from 'rxjs/operators';

import { StarshipsActions } from '../actions';

@Injectable()
export class StarshipsEffects {
  drawStarshipsCards = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.drawStarshipsCards),
      pluck('cards'),
      mergeMap(({ leftPlayerCardId, rightPlayerCardId }) =>
        forkJoin([
          this.service.getStarship(leftPlayerCardId),
          this.service.getStarship(rightPlayerCardId)
        ]).pipe(
          map(([leftStarship, rightStarship]: [StarshipDto, StarshipDto]) =>
            GamesActions.drawStarshipsCardsSuccess({
              starships: [
                { id: leftPlayerCardId, ...leftStarship },
                { id: rightPlayerCardId, ...rightStarship }
              ]
            })
          ),
          catchError((error) =>
            of(GamesActions.drawStarshipsCardsFailure({ error }))
          )
        )
      )
    )
  );

  getCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarshipsActions.getCount),
      mergeMap(() =>
        this.service.getStarshipsPage().pipe(
          pluck('count'),
          map((count: number) => StarshipsActions.getCountSuccess({ count })),
          catchError((error) => of(StarshipsActions.getCountFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: StarshipsService,
    private store: Store<{}>
  ) {}
}
