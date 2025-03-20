import { Group } from '../groups'
import { User } from './user'

export type PopulatedUser = Omit<User, 'group'> & {
  group: Group
}
