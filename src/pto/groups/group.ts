import { Category } from '../categories'

export type Group = {
  id: string
  name: string
  numberOfParticipants: number
  categoryId: string
  category?: Category
}
