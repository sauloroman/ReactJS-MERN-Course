import { render, screen } from '@testing-library/react'
import { FabDelete } from '../../../src/calendar/components/FabDelete'
import { useCalendarStore } from '../../../src/hooks/useCalendarStore'

jest.mock('../../../src/hooks/useCalendarStore.js')

describe('Tests in FabDelete component', () => {

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

})