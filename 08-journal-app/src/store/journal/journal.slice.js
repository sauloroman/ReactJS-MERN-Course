import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({

  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
  },
  reducers: {

    savingNewNote: ( state ) => {
      state.isSaving = true
    },

    addNewEmptyNote: ( state, { payload } ) => {
      state.notes.push( payload )
      state.isSaving = false
    },

    setActiveMode: ( state, { payload }) => {
      state.active = payload
      state.messageSaved = ''
    },
    
    setNotes: ( state, { payload }) => {
      state.notes = payload
    },

    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },

    updateNote: (state, { payload }) => {

      state.isSaving = false
      state.notes = state.notes.map( note => {

        if ( note.id === payload.id ) {
          return payload
        }

        return note
      })

      state.messageSaved = `${payload.title}, actualizada correctamente`

    }

  },

  setPhotosToActiveNote: ( state, {payload} ) => {
    state.active.imageUrls = [ ...state.active.imageUrls, ...payload ]
    state.isSaving = false
  },

  clearNotesLogout: ( state ) => {
    state.isSaving = false
    state.messageSaved = ''
    state.notes = []
    state.active = null
  },

  deleteNoteById: ( state, { payload } ) => {
    state.active = null
    state.notes = state.notes.filter( note => note.id !== payload )
  }

})

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveMode,
  setNotes,
  setSaving,
  updateNote,
  clearNotesLogout,
  deleteNoteById,
  setPhotosToActiveNote
} = journalSlice.actions