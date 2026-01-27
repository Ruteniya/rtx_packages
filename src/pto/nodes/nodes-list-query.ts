import { Pagination } from '../app'

export type NodesListQuery = Pagination & {
  searchText?: string
}
