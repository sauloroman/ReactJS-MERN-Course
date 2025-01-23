export const getImage = async () => {

  const apiKey = 'mgRATcJpf5BstBQPcdB4BCqXSagFBNyM'

  try {
    
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g&limit=1`) 
  
    const { data } = await resp.json()
    
    const { url } = data.images.downsized
  
    // const img = document.createElement('img')
    // img.src = url

    // document.body.append( img )

    return url

  } catch (error) {
    console.warn( error )
  }

}

getImage()