import { useEffect, useMemo, useState } from "react"

export const useForm = ( initialState = {}, formValidations = {} ) => {

  const [ formState, setFormState ] = useState( initialState )
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])

  useEffect(() => {
    setFormState( initialState )
  }, [initialState])

  const isFormValid = useMemo(() => {
    for ( const formValue of Object.values(formValidation) ) {
      if ( formValue !== null ) return false
    }

    return true
  }, [formValidation])

  const onInputChange = ({ target }) => {

    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value
    })

  }

  const onResetForm = () => setFormState( initialState )
  
  const createValidators = () => {

    const formCheckedValues = {}

    for( const formField of Object.keys( formValidations )) {
      const [ fn, errorMessage ] = formValidations[ formField ]
      formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage
    }
 
    setFormValidation({ ...formCheckedValues })

  }

  return {
    ...formState,
    ...formValidation,
    formState,
    isFormValid,

    onInputChange,
    onResetForm
  }

}