import { render, fireEvent, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests in AddCategory.jsx', () => {

  const onAddCategoryMock = jest.fn();

  beforeEach( () => {
    jest.resetAllMocks();
  })

  test('it must match with snapshot', () => {

    const { container } = render(<AddCategory onAddCategory={ onAddCategoryMock }/>)
    expect( container ).toMatchSnapshot();

  })

  test('It must change input value', () => {

    const newTextValue = 'New category'
    render(<AddCategory onAddCategory={ onAddCategoryMock }/>)

    const inputElement = screen.getByRole('textbox')
    fireEvent.change( inputElement, { target: { value: newTextValue }})
    expect( inputElement.value ).toBe(newTextValue);

  });

  test('It must call onAddCategory function if input has value', () => {

    const categoryTest = 'Batman'

    render(<AddCategory onAddCategory={ onAddCategoryMock} />)

    const inputElement = screen.getByRole('textbox');
    fireEvent.change( inputElement, { target: { value: categoryTest }})

    const formElement = screen.getByTestId('form-add-category')
    fireEvent.submit( formElement )

    expect( onAddCategoryMock ).toHaveBeenCalledTimes(1);
    expect( onAddCategoryMock ).toHaveBeenCalledWith( categoryTest );

  });

  test('It must not called onAddCategory function if input has no value', () => {
    
    render(<AddCategory onAddCategory={ onAddCategoryMock} />)

    const formElement = screen.getByTestId('form-add-category')
    fireEvent.submit( formElement )

    expect( onAddCategoryMock ).not.toHaveBeenCalled();

  })  


})