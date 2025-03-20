import { render } from '@testing-library/react'
import { FabDelete } from '../../../src/calendar/components/FabDelete'
import { Provider } from 'react-redux'
import {store} from '../../../src/store/store'

describe('Tests in FabDelete component', () => {

  test('it should show the component correctly', () => {

    render(
      <Provider store={ store }>
        <FabDelete />
      </Provider>
    )

  })

})