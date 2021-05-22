export type User = {
  uid: string
  email: string
  lastName: string
  firstName: string
  gender: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export type FootPrint = {
  visitorUid: string
  userUid: string
  unread: boolean
  createdAt: string
  updatedAt: string
}