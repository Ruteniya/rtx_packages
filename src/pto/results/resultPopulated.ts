import { Group } from '../groups'
import { Result } from './result'

export type ResultPopulated = {
  results: Result[]
} & Group
