import { Pagination } from '../app'

const allowedSortFields = ['groupName', 'totalPoints'] as const
const allowedSortDirections = ['ASC', 'DESC'] as const

export type ResultsListQuery = Pagination & {
  sortBy?: (typeof allowedSortFields)[number]
  sortOrder?: (typeof allowedSortDirections)[number]
  categoryIds?: string[]
}