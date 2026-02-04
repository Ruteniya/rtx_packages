import { GameStatus } from '.'
import { CreateGame } from './create-game'

export type UpdateGame = CreateGame & {
  status?: GameStatus
}

export type UpdateGameOptions = {
  deleteLogo?: boolean
}
