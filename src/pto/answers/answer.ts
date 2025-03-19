import { Group } from '../groups'
import { Node } from '../nodes'

export type Answer = {
  id: string
  userId: string
  groupId: string
  nodeId: string
  answerValue: string
  userComment?: string
  processed: boolean
  correct: boolean
  createdAt: Date
  updatedAt: Date
}
