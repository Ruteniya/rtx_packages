import { GroupEmailResult } from '.'
import { Group } from './group'

export type GroupList = {
  total: number
  items: (Group & { emailResults: GroupEmailResult[] })[]
}
