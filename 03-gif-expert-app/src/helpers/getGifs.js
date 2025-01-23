export const getGifs = async function( search = '' ) {

  try {

    const apiKey = 'mgRATcJpf5BstBQPcdB4BCqXSagFBNyM'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`) 
    const {data} = await resp.json()
    return data

  } catch (error) {
    throw error
  }

}