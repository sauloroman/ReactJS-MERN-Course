import { returnArray } from "../../../01-intro/src/bases/07-deses-arr"

describe('Tests in 07-deses-arr', () => {

  test('First position is a determined String, and second position is a number', () => {

    const [ firstPos, secondPos ] = returnArray()

    expect(firstPos).toBe('ABC')
    expect(secondPos).toBe(124);

    expect( firstPos ).toEqual( expect.any(String) )
    expect( secondPos ).toEqual( expect.any(Number) )

    expect( typeof firstPos ).toBe("string");
    expect( typeof secondPos ).toBe("number");

  })

})