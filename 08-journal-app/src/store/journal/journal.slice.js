import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
      isSaving: false,
      messageSaved: '',
      notes: [],
      active: null,
      // active: {
      //   id: 'ABC123',
      //   title: '',
      //   body: '',
      //   date: 1234567,
      //   imageUrls: [] //https://foto1.jpg,
      // }
    },
    reducers: {

      savingNewNote: ( state ) => {
        state.isSaving = true
      },

      addNewEmptyNote: ( state, action ) => {
        state.notes.push( action.payload )
        state.isSaving = false
      },

      setActiveNote: ( state, action ) => {
        state.active = action.payload
      },

      setNotes: ( state, action ) => {

      },
      
      setSaving: ( state ) => {

      },

      updateNote: ( state, action ) => {

      },

      deleteNoteById: ( state, action ) => {

      },

    }
})

export const {  
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
