import { AnswerType } from './answer-type'

export type NodeSmall = {
  id: string
  name: string
  answerType: AnswerType
  question: string
  points: number
  color?: string
}
