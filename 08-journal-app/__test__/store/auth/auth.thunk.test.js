import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, login, logout, startCreatingUserWithEmailPassword } from "../../../src/store/auth"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/auth.thunk"
import { clearNoteLogout } from "../../../src/store/journal/journal.slice"
import { testUser } from "../../fixtures/auth.fixtures"

// Mockeando todas las funciones del archivo en el que usamos a Firebase
jest.mock('../../../src/firebase/providers.js')

describe('Tests in auth.trunk', () => {
  const dispatch = jest.fn()

  beforeEach(() => jest.clearAllMocks() )
  
  test('it should invoke checking credentials', async () => {

    await checkingAuthentication()( dispatch )

    const value = checkingCredentials()
    expect( dispatch ).toHaveBeenCalledWith( value ) 

  }),

  test('startGoogleSignIn should call checking credentials and login user', async () => {

    const loginData = { ok: true, ...testUser }

    // De esta manera podemos controlar los resultados que esta funcion puede retornar. mockResolvedValue es para promesas, en contraste con mockReturnValue
    await signInWithGoogle.mockResolvedValue( loginData )

    // thunk
    await startGoogleSignIn()( dispatch )

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) 
    expect( dispatch ).toHaveBeenCalledWith( login(loginData) )

  }),

  test('startGoogleSignIn should call checking credentials and logout with an error', async () => {

    const loginData = { ok: false, errorMessage: 'Un error de google'} 

    await signInWithGoogle.mockResolvedValue( loginData )

    await startGoogleSignIn()( dispatch ) 

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
    expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) )

  }),

  test('startLoginWithEmailPassword should call checking credentials and login user', async () => {

    const loginData = { ok: true, ...testUser }
    const formData = { email: testUser.email, password: 'ABC123' }

    await loginWithEmailAndPassword.mockResolvedValue( loginData )

    await startLoginWithEmailPassword( formData  )( dispatch )

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) )

  }),

  test('startLoginWithEmailPassword should call checking credentials and logout with an error', async () => {

    const loginData = { ok: false, errorMessage: 'Firebase error'}
    const formData = { email: testUser.email, password: 'ABC123' }

    await loginWithEmailAndPassword.mockResolvedValue( loginData )

    await startLoginWithEmailPassword( formData )( dispatch )

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
    expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) )

  }),

  test('startCreatingUserWithEmailPassword should call checkingCredentials and login an user', async () => {
    
    const creatingUserData = { ok: true, ...testUser } 

    await registerUserWithEmailPassword.mockResolvedValue( creatingUserData )

    await startCreatingUserWithEmailPassword({ 
      email: testUser.email, 
      password: 'ABC123', 
      displayName: testUser.displayName 
    })( dispatch )

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
    expect( dispatch ).toHaveBeenCalledWith( login( creatingUserData ) ) 

  }),

  
  test('startCreatingUserWithEmailPassword should call checkingCredentials and logout with an error', async () => {
    
    const creatingUserData = { ok: false, errorMessage: 'Firebase error' } 

    await registerUserWithEmailPassword.mockResolvedValue( creatingUserData )

    await startCreatingUserWithEmailPassword({ 
      email: testUser.email, 
      password: 'ABC123', 
      displayName: testUser.displayName 
    })( dispatch )

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
    expect( dispatch ).toHaveBeenCalledWith( logout( creatingUserData.errorMessage ) ) 

  }),

  test('startLogout should call logoutFirebase, clearNoteLogout and logout', async() => {

    await startLogout()( dispatch )

    expect( logoutFirebase ).toHaveBeenCalled()
    expect( dispatch ).toHaveBeenCalledWith( clearNoteLogout() )
    expect( dispatch ).toHaveBeenCalledWith( logout() )
  })

})