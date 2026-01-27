import { AnswerType } from './answer-type'

export type CreateNode = {
  name: string
  answerType: AnswerType
  question: string
  adminDescription?: string
  correctAnswer?: string
  points: number
  comment?: string
  color?: string
}
