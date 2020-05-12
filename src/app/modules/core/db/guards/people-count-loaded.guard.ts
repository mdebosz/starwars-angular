import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { PeopleFacade } from '../facades';

@Injectable({
  providedIn: 'root'
})
export class PeopleCountLoadedGuard implements CanActivate {
  constructor(private peopleFacade: PeopleFacade) {}

  canActivate(): Observable<boolean> {
    return this.peopleFacade.peopleCountLoaded$.pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.peopleFacade.getCount();
        }
      }),
      first()
    );
  }
}
