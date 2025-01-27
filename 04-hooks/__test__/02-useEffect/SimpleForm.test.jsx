import { fireEvent, render, screen } from '@testing-library/react'
import { SimpleForm } from '../../src/02-useEffect/SimpleForm'

describe('Tests in SimpleForm', () => {

  test('It must match with the spanshot', () => {
    const { container } = render(<SimpleForm />)
    expect( container ).toMatchSnapshot()
  })

  test('it must change input values', () => {
    render(<SimpleForm />)

    const inputValue = 'Roman Nava'
    const emailValue = 'roman@gmail.com'
    const ageValue = '20'

    const usernameInput = screen.getByTestId('username-input')
    const emailInput = screen.getByTestId('email-input')
    const ageInput = screen.getByTestId('age-input')

    fireEvent.change( usernameInput, { target: { value: inputValue } })
    fireEvent.change( emailInput, { target: { value: emailValue }})
    fireEvent.change( ageInput, { target: { value: ageValue }} )

    expect( usernameInput.value ).toBe(inputValue)
    expect( emailInput.value ).toBe(emailValue)
    expect( ageInput.value ).toBe( ageValue )

  })

})