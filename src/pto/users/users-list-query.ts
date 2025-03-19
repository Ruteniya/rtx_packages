import { Pagination } from '../app'

export type UsersListQuery = Pagination & {
  searchText?: string
}
