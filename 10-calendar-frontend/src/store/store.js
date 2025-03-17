import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './ui/ui.slice'
import { calendarSlice } from './calendar/calendar.slice'
import { authSlice } from './auth/auth.slice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})