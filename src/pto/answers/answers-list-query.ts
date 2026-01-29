import { Pagination, Sorting } from '../app'

export interface AnswerListQuery extends Pagination, Sorting {
  searchText?: string
  processed?: boolean
  correct?: boolean
  groupIds?: string[]
  nodeIds?: string[]
  updatedAt?: Date
}
