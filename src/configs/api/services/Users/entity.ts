export interface LoginInfo {
  username: string
  password: string
}

export interface VerifiedUser {
  username: string
  accessToken: string
  refreshToken: string
  expiresAccessDate: Date
  expiresRefreshDate: Date
}

export interface Exception {
  statusCode: number
  message: string
  error: string
}
