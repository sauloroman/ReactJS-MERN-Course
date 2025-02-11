import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { journalSlice } from './journal/journal.slice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer
  }
})