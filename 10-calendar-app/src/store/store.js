import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './'

export const store = configureStore({
  reducers: {
    ui: uiSlice.reducer
  }
})