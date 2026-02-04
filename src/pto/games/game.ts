import { GameStatus } from "."

export type Game = {
  id: string
  name: string
  description: string
  logo: string
  status: GameStatus
  startDate: Date
  endDate: Date
}
