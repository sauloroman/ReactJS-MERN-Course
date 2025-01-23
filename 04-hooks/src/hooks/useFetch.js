import { useEffect } from "react"
import { useState } from "react"

export const useFetch = ( url = '' ) => {

  const [state, setState] = useState({
    data: null,
    hasError: null,
    isLoading: false,
  })

  useEffect(() => {
    getData()
  }, [ url ])

  const getData = async () => {

    setState({
      ...state,
      isLoading: true,
    })

    try {
      
      const res = await fetch( url );
      const data = await res.json()
    
      setState({
        ...state,
        data: data,
        isLoading: false,
      })

    } catch (error) {
      setState({
        ...state,
        hasError: error,
        isLoading: false,
      })
    }

  }

  return {
    data: state.data,
    hasError: state.hasError,
    isLoading: state.isLoading,
  }

}