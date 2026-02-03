import { Group } from '../groups'
import { Result } from './result'

export type ResultPopulated = {
  results: Result[]
} & Group

export type ResultsPopulated = {
  total: number
  items: ResultPopulated[]
}