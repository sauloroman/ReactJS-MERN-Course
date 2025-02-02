import { render } from '@testing-library/react'
import { MemoHook } from '../../src/06-memos/MemoHook'

describe('Tests in MemoHook', () => {

  test('It must match with snapshot', () => {
    const { container } = render(<MemoHook />)
    expect( container ).toMatchSnapshot()
  })

})