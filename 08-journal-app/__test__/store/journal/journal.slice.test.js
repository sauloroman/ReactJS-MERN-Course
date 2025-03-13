import {
  addNewEmptyNote,
  clearNoteLogout,
  deleteNoteById,
  journalSlice,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "../../../src/store/journal/journal.slice"
import { 
  emptyNewNote, 
  initialState, 
  stateWithActiveNote, 
  stateWithNotes, 
  testNote 
} from "../../fixtures/journal.fixtures"

describe('Tests in journal.slice', () => {

  test('it should return the initial state and it is called "journal"', () => {
    const state = journalSlice.reducer( initialState, {} )
    expect( journalSlice.name ).toBe("journal")
    expect( state ).toEqual( initialState )

  }),

  test('savingNewNote action must change the state of isSaving property', () => {

    const state = journalSlice.reducer( initialState, savingNewNote() )
    
    expect( state.isSaving ).toBeTruthy()

  }),

  test('addNewEmptyNote should add a new empty note to the notes array', () => {

    const state = journalSlice.reducer( initialState, addNewEmptyNote( emptyNewNote ) )

    expect( state.notes.length ).toBe(1)
    expect( state.notes[0] ).toEqual( emptyNewNote )
    expect( state.isSaving ).toBeFalsy()

  }),

  test('setActiveNote should set a note in state', () => {

    const state = journalSlice.reducer( initialState, setActiveNote( emptyNewNote ) )
    
    expect( state.messageSaved ).toBe('')
    expect( state.active ).toEqual( emptyNewNote)

  }),

  test('setNotes should an array with notes', () => {

    const state = journalSlice.reducer( initialState, setNotes([ emptyNewNote ]) )

    expect( state.notes.length ).toBe(1)
    expect( state.notes[0] ).toEqual( emptyNewNote )

  }),

  test('setSaving should set isSaving as true and messageSaved as empty string', () => {

    const state = journalSlice.reducer( initialState, setSaving() )

    expect( state.isSaving ).toBeTruthy()
    expect( state.messageSaved ).toBe('')

  }),

  test('updateNote should update a note depending the id', () => {

    const newState = journalSlice.reducer( initialState, addNewEmptyNote( emptyNewNote ) )

    const updateState = journalSlice.reducer( newState, updateNote({  ...testNote, id: emptyNewNote.id}) )

    const targetNote = updateState.notes.find( note => note.id === emptyNewNote.id ) 

    expect( updateState.isSaving ).toBeFalsy()
    expect( targetNote.title ).toBe( testNote.title )
    expect( targetNote.body ).toBe( testNote.body )
    expect( updateState.messageSaved ).toBe(`${testNote.title}, actualizada correctamente`)

  }),

  test('setPhotosToActiveNote must add a new url to the imageUrls array', () => {

    const newImageUrl = 'https://my-photo.test.jpg'

    const state = journalSlice.reducer( stateWithActiveNote, setPhotosToActiveNote([ newImageUrl ]) )

    expect( state.active.imageUrls.includes( newImageUrl ) ).toBeTruthy()
    expect( state.isSaving ).toBeFalsy()

  }),

  test('clearNoteLogout should restart the state', () => {
    const state = journalSlice.reducer( stateWithActiveNote, clearNoteLogout() )
    expect( state ).toEqual( initialState )
  }),

  test('deleteNoteById should delete a note from state', () => {
    const state = journalSlice.reducer( stateWithNotes, deleteNoteById( testNote.id ) )
    expect( state.notes.length ).toBe(0)
    expect( state.active ).toBeNull()
  })

})