import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/ui.slice"

describe('Tests in ui.slice', () => {

  test('it should return the initial state', () => {
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false })
  }),

  test('it shoudl change isDateModalOpen', () => {

    let state = uiSlice.getInitialState()
    state = uiSlice.reducer( state, onOpenDateModal() )
    expect( state.isDateModalOpen ).toBeTruthy()

    state = uiSlice.reducer( state, onCloseDateModal() )
    expect( state.isDateModalOpen ).toBeFalsy()
  })

})