const jwt = require('jsonwebtoken')

const generateJWT = ( uid, name ) => {
  return new Promise(( res, rej ) => {

    const payload = { uid, name }

    jwt.sign( payload, process.env.JWT_SEED, { expiresIn: '2h' }, (err, token) => {
      if ( err ) {
        console.log(err)
        return rej('No se pudo generar el token')
      }
      res( token )
    })

  })
}

module.exports = {
  generateJWT
}