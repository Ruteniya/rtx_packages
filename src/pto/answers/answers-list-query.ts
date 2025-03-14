import { Pagination } from '../app'

export type AnswerListQuery = Pagination & {
  searchText?: string
  processed?: boolean
  correct?: boolean
  groupIds?: string[]
  updatedAt?: Date
}
