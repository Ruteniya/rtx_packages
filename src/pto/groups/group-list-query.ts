import { Pagination } from '../app'

export type GroupsListQuery = Pagination & {
  searchText?: string
  categoryIds?: string[]
  hasEmailResults?: boolean
}
