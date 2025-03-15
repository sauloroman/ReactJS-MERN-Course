import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './ui/ui.slice'
import { calendarSlice } from './calendar/calendar.slice'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})