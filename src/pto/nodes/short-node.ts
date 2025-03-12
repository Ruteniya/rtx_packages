import { AnswerType } from './answer-type'

export type ShortNode = {
  id: string
  name: string
  answerType: AnswerType
  question: string
  questionImage?: string
  points: number
  comment?: string
}
