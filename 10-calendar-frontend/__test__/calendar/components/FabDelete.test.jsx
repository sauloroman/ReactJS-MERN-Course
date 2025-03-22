import { fireEvent, render, screen } from '@testing-library/react'
import { FabDelete } from '../../../src/calendar/components/FabDelete'
import { useCalendarStore } from '../../../src/hooks/useCalendarStore'

jest.mock('../../../src/hooks/useCalendarStore.js')

describe('Tests in FabDelete component', () => {

  const mockStartDeletingEvent = jest.fn()

  beforeEach(() => jest.clearAllMocks() )
  // beforeEach(() => jest.clearAllTimers() )

  test('it should show the component correctly', () => {

    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    })

    render( <FabDelete /> )

    const btn = screen.getByLabelText('btn-delete')

    expect( btn.classList ).toContain('btn')
    expect( btn.classList ).toContain('btn-danger')
    expect( btn.classList ).toContain('fab-danger')
    expect( btn.style.display ).toBe('none')

  })

  test('it should display the button if there is an active event', () => {

    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    })

    render(<FabDelete />)

    const btn = screen.getByLabelText('btn-delete')
    expect( btn.style.display ).toBe('')

  })

  test('it should call startDeletingEvent if there is an active event', () => {

    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeleteEvent: mockStartDeletingEvent
    })

    render(<FabDelete />)

    const btn = screen.getByLabelText('btn-delete')
    fireEvent.click( btn )

    expect( mockStartDeletingEvent ).toHaveBeenCalled()

  })

})