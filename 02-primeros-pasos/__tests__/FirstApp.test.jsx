import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests in FirstApp', () => {
  const titleTest = 'TestTitle';
  const subTitleTest = 'SubTitleTest';
  const nameTest = 'RomanTest';

  test('It must match with snapshot', () => {
    const { container } = render(
      <FirstApp 
        title={titleTest} 
        subTitle={subTitleTest} 
        name={nameTest} 
      />
    );
    expect( container ).toMatchSnapshot()
  });

  test('It must show title in an h1 element', () => {

    const { getByTestId, getByRole } = render(
      <FirstApp 
        title={titleTest} 
        subTitle={subTitleTest} 
        name={nameTest} 
      />
    )

    const element = getByTestId('test-title')

    expect( element.innerHTML ).toContain( titleTest )
    expect( element.localName ).toBe('h1')
    expect( getByRole('heading', { level: 1} ).innerHTML ).toBe(titleTest)

  });

  test('It must show subtitle and name in p elements', () => {

    const { getByText } = render(
      <FirstApp 
        title={titleTest} 
        subTitle={subTitleTest} 
        name={nameTest} 
      />
    )

    const subtitleEle = getByText( subTitleTest )
    const nameEle = getByText( nameTest )

    expect( subtitleEle ).toBeTruthy()
    expect( nameEle ).toBeTruthy()
    expect( subtitleEle.localName && nameEle.localName ).toBe('p')

  })  

});
