import { collection, deleteDoc, getDocs } from "firebase/firestore/lite"
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journal.slice"
import { startNewNote } from "../../../src/store/journal/journal.thunk"
import { FirebaseDB } from "../../../src/firebase/config,"

describe('Tests in journal.thunk', () => { 

  const dispatch = jest.fn()
  const getState = jest.fn()

  beforeEach(() => jest.clearAllMocks() )

  test('startNewNote should create a new blank note', async () => {

    const uid = 'TEST-ID'
    getState.mockReturnValue({ auth: { uid }})

    await startNewNote()( dispatch, getState ) 

    expect( dispatch ).toHaveBeenCalledWith( savingNewNote() )
    expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
      body: '',
      title: '',
      id: expect.any( String ),
      date: expect.any( Number ),
      imageUrls: [],
    }))
    expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
      body: '',
      title: '',
      id: expect.any( String ),
      date: expect.any( Number ),
      imageUrls: [],
    }))

    // Borrar de firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs( collectionRef )

    const deletePromises = []
    docs.forEach( doc => deletePromises.push( deleteDoc(doc.ref) ))

    await Promise.all([ ...deletePromises ])

  })

  //* TODO: Realizar las otras pruebas de journal-thunk

})