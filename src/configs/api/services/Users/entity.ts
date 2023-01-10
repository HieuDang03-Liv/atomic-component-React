export interface LoginInfo {
  username: string
  password: string
}

export interface VerifiedUser {
  username: string | null
  accessToken: string | null
  refreshToken: string | null
  expiresAccessDate: Date | null
  expiresRefreshDate: Date | null
}

export interface Exception {
  statusCode: number
  message: string
  error: string
}
