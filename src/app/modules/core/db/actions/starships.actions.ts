import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props, union } from '@ngrx/store';

export const getCount = createAction('[DB / Starships] Get Count');

export const getCountSuccess = createAction(
  '[DB / Starships] Get Count Success',
  props<{ count: number }>()
);

export const getCountFailure = createAction(
  '[DB / Starships] Get Count Failure',
  props<{ error: HttpErrorResponse }>()
);

const all = union({
  getCount,
  getCountSuccess,
  getCountFailure
});
export type StarshipsActionsUnion = typeof all;
