import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { StarshipsActions } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class StarshipsCountLoadedGuard implements CanActivate {
  constructor(private store: Store<{}>) {}

  canActivate(): Observable<boolean> {
    this.store.dispatch(StarshipsActions.getCount());
    return of(true);
  }
}
