import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/file-upload"

cloudinary.config({
  cloud_name: 'dlamufioy',
  api_key: '961239442992252',
  api_secret: 'HHY8ED9RCRp_Xg-ap5bSlOtcADM',
  secure: true,
})

describe('Tests in FileUpload', () => { 
  
  test('It should upload a file to Cloudinary', async () => {
    
    const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    const resp =  await fetch(imageUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'image-test.jpg')
    
    const url = await fileUpload( file )
    expect( url.startsWith('https') ).toBeTruthy()

    const segmentsUrl = url.split('/')
    const imageId = segmentsUrl.at(-1).replace('.png', '')

    await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], { resource_type: 'image' })

  })  

  test('It should return null if there is no file', async () => {

    const file = new File([], 'no-image.jpg')
    const url = await fileUpload( file )
    expect( url ).toBeNull()

  })

})