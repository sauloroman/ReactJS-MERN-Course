import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveMode, setSaving, updateNote } from "./journal.slice"
import { FirebaseDB } from "../../firebase/config"

export const startNewNoteThunk = () => {
  return async ( dispatch, getState ) => {

    dispatch( savingNewNote() )

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`) )
    await setDoc( newDoc, newNote )

    newNote.id = newDoc.id

    dispatch( addNewEmptyNote(newNote) )
    dispatch( setActiveMode(newNote) )

  }
}

export const startSaveNote = () => {
  return async ( dispatch, getState ) => {

    dispatch( setSaving() )

    const { uid } = getState().auth
    const { active: note } = getState().journal

    const noteToFireStore = { ...note }
    delete noteToFireStore.id

    const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await setDoc( docRef, noteToFireStore, { merge: true })

    dispatch( updateNote( note ) )      

  }
}

export const startDeletingNote = () => {
  return async ( dispatch, getState ) => {

    const { uid } = getState().auth
    const { active: note } = getState().journal

    const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc( docRef )

    dispatch( deleteNoteById( note.id ) )

  }
}

export const startUploadingFiles = ( files = [] ) => {
  return async ( dispatch ) => {

    dispatch( setSaving() ) 

    const fileUploadPromises = []
    for( const file of files ) {
      // fileUploadPromises.push( fileUpload)
    }


  }
}