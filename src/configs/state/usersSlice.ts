import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { VerifiedUser } from '@configs/api/services/Users/entity'

const initialState: VerifiedUser = {
  accessToken: null,
  refreshToken: null,
  expiresAccessDate: null,
  expiresRefreshDate: null,
  username: null
} as const

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<VerifiedUser>): VerifiedUser => {
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        username: action.payload.username,
        expiresAccessDate: action.payload.expiresAccessDate,
        expiresRefreshDate: action.payload.expiresRefreshDate
      }
    },
    logout: (state): void => {
      state = initialState
    }
  }
})

export const { login, logout } = usersSlice.actions

export default usersSlice.reducer
