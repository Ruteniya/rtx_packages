import { AnswerType } from './answer-type'

export type UpdateNode = {
  name?: string
  answerType?: AnswerType
  question?: string
  questionImage?: string
  adminDescription?: string
  correctAnswer?: string
  points?: number
  comment?: string
}
