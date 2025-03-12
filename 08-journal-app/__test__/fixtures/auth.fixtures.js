export const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authenticatedState = {
  status: 'authenticated', 
  uid: 'ABC123',
  email: 'test@google.com',
  displayName: 'Roman Nava',
  photoURL: 'https://test-photo.jpg',
  errorMessage: null,
}

export const notAuthenticatedState = {
  status: 'not-authenticated', 
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const testUser = {
  uid: 'ABC123',
  email: 'test@google.com',
  displayName: 'Roman Nava',
  photoURL: 'https://test-photo.jpg'
}