import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PersonDto } from 'app/api/models';
import { PeopleFacade } from 'app/modules/core/db/facades';
import { Observable } from 'rxjs';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { GameType } from '../models';
import { GamesFacade } from '../store/games.facade';

@Component({
  selector: 'app-people-page',
  templateUrl: './people.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeoplePageComponent {
  leftCard$: Observable<PersonDto> = this.gamesFacade.leftPlayerCardId$.pipe(
    filter(Boolean),
    switchMap((id: number) => this.peopleFacade.getPerson$(id))
  );

  rightCard$: Observable<PersonDto> = this.gamesFacade.rightPlayerCardId$.pipe(
    filter(Boolean),
    switchMap((id: number) => this.peopleFacade.getPerson$(id))
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
    private peopleFacade: PeopleFacade
  ) {}

  startGame() {
    this.gamesFacade.startGame(GameType.PEOPLE);
  }
}
