import calendarApi from "../../src/api/calendar.api"

describe('Tests in calendar.api', () => {

  test('it should contain the default config', () => {
    expect( calendarApi.defaults.baseURL ).toBe( process.env.VITE_BACKEND_URL )
  }),

  test('it should contain the x-token in the header of any http request', async () => {
    const testToken = 'ABC-123-XYZ'

    localStorage.setItem('token', testToken)
    const res = await calendarApi.get('/auth')
    
    expect( res.config.headers['x-token'] ).toBe(testToken)
  })

})