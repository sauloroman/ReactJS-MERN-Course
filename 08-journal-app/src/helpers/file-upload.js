export const fileUpload = async ( file ) => {

  if ( !file ) return null

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dlamufioy/image/upload'

  const formData = new FormData()
  formData.append('file', file )
  formData.append('upload_preset', 'journal-app' )

  try {
    
    const resp = await fetch( cloudUrl, { method: 'POST', body: formData })
    
    if ( !resp.ok ) throw new Error('No se pudo subir la imagen')

    const cloudResp = await resp.json()

    return cloudResp.secure_url
      
  } catch (error) {
    // console.log(error)
    // throw new Error( error.message )
    return null
  }


}