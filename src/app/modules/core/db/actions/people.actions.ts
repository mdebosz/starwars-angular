import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props, union } from '@ngrx/store';

export const getCount = createAction('[DB / People] Get Count');

export const getCountSuccess = createAction(
  '[DB / People] Get Count Success',
  props<{ count: number }>()
);

export const getCountFailure = createAction(
  '[DB / People] Get Count Failure',
  props<{ error: HttpErrorResponse }>()
);

const all = union({
  getCount,
  getCountSuccess,
  getCountFailure
});
export type PeopleActionsUnion = typeof all;
