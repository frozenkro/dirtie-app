export interface User {
  uid: string,
  email?: string,
  displayName?: string,
  refreshToken: string,
  dirtieUserId: string;
}
