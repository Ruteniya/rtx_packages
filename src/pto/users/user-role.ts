export const UserRole = {
  User: 'user',
  Admin: 'admin',
  SystemAdmin: 'systemAdmin'
} as const

export type UserRoleType = (typeof UserRole)[keyof typeof UserRole]
