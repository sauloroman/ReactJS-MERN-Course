import { render } from '@testing-library/react'
import { Small } from "../../src/06-memos/Small"

describe('Tests in Small Component', () => {

  test('It must match with snapshot', () => {
    const { container } = render(<Small />)
    expect( container ).toMatchSnapshot()
  })

  test('it should display value from props in a p element', () => {
    const { getByRole } = render(<Small value={10} />)
    const paraEle = getByRole('paragraph')
    expect( paraEle.textContent ).toBe('10')
  })

})