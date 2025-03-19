import { Category } from '../categories'
import { User } from '../users'

export type PopulatedGroup = {
  id: string
  name: string
  numberOfParticipants: number
  categoryId: string
  category: Category
  users: User[]
}
