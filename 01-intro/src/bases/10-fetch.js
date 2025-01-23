const apiKey = 'mgRATcJpf5BstBQPcdB4BCqXSagFBNyM'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g&limit=1`)
  .then( res => res.json() )
  .then(({data}) => {
    
    const { url } = data.images.downsized
  
    const img = document.createElement('img')
    img.src = url

    document.body.append( img )

  })
  .catch( console.warn )