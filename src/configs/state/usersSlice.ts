import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { VerifiedUser } from '@configs/api/services/Users/entity'

const initialState: VerifiedUser | null = null

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<VerifiedUser>) => {
      state = { ...action.payload } as any
    },
    logout: (state): void => {
      state = initialState
    }
  }
})

export const { login, logout } = usersSlice.actions

export default usersSlice.reducer
