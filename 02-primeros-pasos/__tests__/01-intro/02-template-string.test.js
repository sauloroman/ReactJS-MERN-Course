import { getGreeting } from "../../../01-intro/src/bases/02-template-string";

describe('Tests on 02-template-string', () => {

  test("It must show return 'Hello Roman'", () => {

    const firstName = "Roman";
    const result = getGreeting(firstName)

    expect( result ).toBe(`Hello ${firstName}`)

  })

})