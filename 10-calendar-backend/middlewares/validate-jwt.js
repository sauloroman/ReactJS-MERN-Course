const { request, response } = require("express");
const jwt = require('jsonwebtoken')

const validateJWT = ( req = request, res = response, next ) => {

  // X-TOKEN
  const token = req.header('x-token')

  if ( !token ) return res.status(401).json({ok: false, msg: 'No hay token en la peticion'})
    
  try {
    
    const payload = jwt.verify(token, process.env.JWT_SEED)
    const { uid, name } = payload

    req.uid = uid
    req.name = name

  } catch (error) {
    return res.status(401).json({ ok: false, msg: 'Token no valido'})  
  }

  next()
}

module.exports = {
  validateJWT
}