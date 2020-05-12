import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StarshipDto } from 'app/api/models';
import { StarshipsFacade } from 'app/modules/core/db/facades';
import { Observable } from 'rxjs';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { GameType } from '../models';
import { GamesFacade } from '../store/games.facade';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipsPageComponent {
  leftCard$: Observable<StarshipDto> = this.gamesFacade.leftPlayerCardId$.pipe(
    filter(Boolean),
    switchMap((id: number) => this.starshipsFacade.getStarship$(id))
  );

  rightCard$: Observable<
    StarshipDto
  > = this.gamesFacade.rightPlayerCardId$.pipe(
    filter(Boolean),
    switchMap((id: number) => this.starshipsFacade.getStarship$(id))
  );

  leftPlayerWonMatches$: Observable<number> = this.gamesFacade
    .leftPlayerWonMatches$;
  rightPlayerWonMatches$: Observable<number> = this.gamesFacade
    .rightPlayerWonMatches$;

  disabled$: Observable<boolean> = this.gamesFacade.gamesLoading$.pipe(
    withLatestFrom(this.gamesFacade.gamesLoaded$),
    map(([loading, loaded]: [boolean, boolean]) => !!loading && !loaded)
  );

  constructor(
    private gamesFacade: GamesFacade,
    private starshipsFacade: StarshipsFacade
  ) {}

  startGame() {
    this.gamesFacade.startGame(GameType.STARSHIPS);
  }
}
