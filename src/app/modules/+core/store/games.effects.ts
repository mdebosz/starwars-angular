import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersonDto, StarshipDto } from 'app/api/models';
import { PeopleFacade, StarshipsFacade } from 'app/modules/core/db/facades';
import { map, pluck, withLatestFrom } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { Game, GameType } from '../models';
import { GameService } from '../services/game.service';
import * as GamesActions from './games.actions';

@Injectable()
export class GamesEffects {
  startGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.startGame),
      pluck('gameType'),
      withLatestFrom(
        this.peopleFacade.peopleCount$,
        this.starshipsFacade.starshipsCount$
      ),
      map(
        ([gameType, peopleCount, starshipsCount]: [
          GameType,
          number,
          number
        ]) => {
          let leftPlayerCardId: number;
          let rightPlayerCardId: number;
          if (gameType === GameType.PEOPLE) {
            leftPlayerCardId = this.gameService.getRandomIntegerBetween(
              1,
              peopleCount + 1
            );
            rightPlayerCardId = this.gameService.getRandomIntegerBetween(
              1,
              peopleCount + 1
            );
            return GamesActions.drawPeopleCards({
              cards: { leftPlayerCardId, rightPlayerCardId }
            });
          } else if (gameType === GameType.STARSHIPS) {
            leftPlayerCardId = this.gameService.getRandomIntegerBetween(
              1,
              starshipsCount + 1
            );
            rightPlayerCardId = this.gameService.getRandomIntegerBetween(
              1,
              starshipsCount + 1
            );
            return GamesActions.drawStarshipsCards({
              cards: { leftPlayerCardId, rightPlayerCardId }
            });
          }
        }
      )
    )
  );

  calculatePeopleResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.drawPeopleCardsSuccess),
      pluck('people'),
      map(([leftPerson, rightPerson]: PersonDto[]) => {
        const winnerId = this.gameService.compareMasses(
          leftPerson,
          rightPerson
        );
        const results: Game = {
          id: `${uuidv4()}`,
          leftWin: winnerId === leftPerson.id,
          rightWin: winnerId === rightPerson.id,
          draw: winnerId === 0,
          gameType: GameType.PEOPLE
        };
        return GamesActions.showResults({ results });
      })
    )
  );

  calculateStarshipsResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.drawStarshipsCardsSuccess),
      pluck('starships'),
      map(([leftStarship, rightStarship]: StarshipDto[]) => {
        const winnerId = this.gameService.compareCrew(
          leftStarship,
          rightStarship
        );
        const results: Game = {
          id: `${uuidv4()}`,
          leftWin: winnerId === leftStarship.id,
          rightWin: winnerId === rightStarship.id,
          draw: winnerId === 0,
          gameType: GameType.STARSHIPS
        };
        return GamesActions.showResults({ results });
      })
    )
  );

  showResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.showResults),
      pluck('results'),
      map(({ id }: Game) => GamesActions.select({ id }))
    )
  );

  constructor(
    private actions$: Actions,
    private peopleFacade: PeopleFacade,
    private starshipsFacade: StarshipsFacade,
    private gameService: GameService
  ) {}
}
