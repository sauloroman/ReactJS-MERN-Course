import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( search ) => {

  const [result, setResult] = useState({
    data: null,
    hasError: null,
    isLoading: false,
  })

  useEffect(() => {
    getData( search )
  }, [])

  const getData = async () => {

    setResult({
      ...result,
      isLoading: true,
    })

    try {

      const data = await getGifs( search )

      setResult({
        data,
        hasError: null,
        isLoading: false,
      })
      
    } catch (error) {
      setResult({
        data: null,
        hasError: error,
        isLoading: false,
      })
    }

  }

  return {
    ...result,
  }

}