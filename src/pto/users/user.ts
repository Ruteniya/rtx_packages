import { Group } from '../groups'
import { UserRoleType } from './user-role'

export type User = {
  id: string
  groupId?: string
  email: string
  firstName: string
  lastName: string
  role: UserRoleType

  group?: Group
}
