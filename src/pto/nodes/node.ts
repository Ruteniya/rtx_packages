import { AnswerType } from './answer-type'

export type Node = {
  id: string
  name: string //(unique)
  answerType: AnswerType
  question: string
  questionImage?: string
  adminDescription?: string
  correctAnswer?: string
  points: number
  comment?: string
  color?: string
  categoryIds: string[]
}
