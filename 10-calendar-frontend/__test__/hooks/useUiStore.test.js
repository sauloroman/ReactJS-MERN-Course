import { renderHook } from '@testing-library/react'
import { useUiStore } from '../../src/hooks/useUiStore'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from '../../src/store/ui/ui.slice'

const getMockStore = ( initialState = {} ) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer
    },
    preloadedState: {
      ui: { ...initialState }
    }
  })
}

describe('Tests in useUiStore', () => {

  test('it should return the default values', () => {

    const mockStore = getMockStore({ isDateModalOpen: false })

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider> 
    })

    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
      toggleDateModal: expect.any(Function),
    })

  })
})