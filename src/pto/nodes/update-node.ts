import { CreateNode } from './create-node'

export type UpdateNode = CreateNode

export type UpdateNodeOptions = {
  deleteQuestionImage?: boolean
  deleteCorrectAnswerImage?: boolean
}
