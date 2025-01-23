export const GifItem = ({ gifs }) => {
  return (
    <div className="grid-gifs">
      {
        gifs?.map( ({ id, images: { original: {url}} }) => (
          <img className="grid-gif" key={id} src={ url } alt={ id } />
        ))
      }
    </div>
  )
}
