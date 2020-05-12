import { GameType } from './game-type';

export interface Game {
  id?: string;
  leftWin?: boolean;
  rightWin?: boolean;
  draw?: boolean;
  gameType?: GameType;
}
