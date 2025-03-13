export const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
}

export const stateWithActiveNote = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: {
    ...testNote,
    imageUrls: ['https://photo1.test.jpg', 'https://photo2.test.jpg']
  },
}

export const testNote = {
  id: 'BCD345',
  title: 'Test title',
  body: 'Test body',
  date: new Date(),
  imageUrls: []
}

export const stateWithNotes = {
  isSaving: false,
  messageSaved: '',
  notes: [ testNote ],
  active: null,
}


export const emptyNewNote = {
  id: 'abc123',
  title: '',
  body: '',
  date: new Date(),
  imageUrls: []
}
