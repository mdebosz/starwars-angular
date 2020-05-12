import { createAction, props, union } from '@ngrx/store';
import { PersonDto, StarshipDto } from 'app/api/models';

import { Game, GameType } from '../models';

export const startGame = createAction(
  '[Games] Start',
  props<{ gameType: GameType }>()
);

export const drawPeopleCards = createAction(
  '[Games] Draw People Cards',
  props<{ cards: { leftPlayerCardId: number; rightPlayerCardId: number } }>()
);

export const drawPeopleCardsSuccess = createAction(
  '[Games] Draw People Cards Success',
  props<{ people: PersonDto[] }>()
);

export const drawPeopleCardsFailure = createAction(
  '[Games] Draw People Cards Failure',
  props<{ error: any }>()
);

export const drawStarshipsCards = createAction(
  '[Games] Draw Starships Cards',
  props<{ cards: { leftPlayerCardId: number; rightPlayerCardId: number } }>()
);

export const drawStarshipsCardsSuccess = createAction(
  '[Games] Draw Starships Cards Success',
  props<{ starships: StarshipDto[] }>()
);

export const drawStarshipsCardsFailure = createAction(
  '[Games] Draw Starships Cards Failure',
  props<{ error: any }>()
);

export const calculatePeopleResults = createAction(
  '[Games] Calculate People Results',
  props<{ cards: { leftPlayerCardId: number; rightPlayerCardId: number } }>()
);

export const calculateStarshipsResults = createAction(
  '[Games] Calculate Starships Results',
  props<{ cards: { leftPlayerCardId: number; rightPlayerCardId: number } }>()
);

export const showResults = createAction(
  '[Games] Show Results',
  props<{ results: Game }>()
);

export const select = createAction('[Games] Select', props<{ id: string }>());

const all = union({
  startGame,
  drawPeopleCards,
  drawPeopleCardsSuccess,
  drawPeopleCardsFailure,
  drawStarshipsCards,
  drawStarshipsCardsSuccess,
  drawStarshipsCardsFailure,
  showResults
});
export type GamesActionsUnion = typeof all;
