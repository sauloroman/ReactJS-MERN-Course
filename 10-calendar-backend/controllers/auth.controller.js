const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const { User } = require('../models/user.model')
const { generateJWT } = require('../helpers/jwt')

const createUser = async (req = request, res = response ) => {

  const { email, password } = req.body

  try {

    let user = await User.findOne({ email })

    if ( user ) return res.status(400).json({ ok: false, msg: 'El correo ya existe' })

    user = new User({ ...req.body })

    const salt = bcryptjs.genSaltSync()
    const hashPass = bcryptjs.hashSync( password, salt )
    user.password = hashPass  

    await user.save()

    const token = await generateJWT( user._id, user.name )

    res.status(201).json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    })   

  } catch (error) {
    console.log(error)
    
    res.status(500).json({
      ok: false,
      msg: 'Por hable con el administrador'
    })
  }
 

}

const loginUser = async (req = request, res = response ) => {

  const { email, password } = req.body

  try {

    const user = await User.findOne({ email })
    if ( !user ) return res.status(404).json({ ok: false, msg: 'El usuario no existe' })

    const validPassword = bcryptjs.compareSync( password, user.password )
    if ( !validPassword ) return res.status(400).json({ ok: false, msg: 'Password incorrecto' })
    
    const token = await generateJWT( user._id, user.name )

    res.status(200).json({
      ok: true,
      uid: user._id,
      name: user.name,
      token  
    })

  } catch (error) {
    console.log(error)
    
    res.status(500).json({
      ok: false,
      msg: 'Por hable con el administrador'
    })
  }
}

const renewToken = async (req = request, res = response ) => {

  const { uid, name } = req

  const token = await generateJWT( uid, name )

  res.status(200).json({
    ok: true,
    uid, name,
    token
  })

}

module.exports = {
  createUser,
  loginUser,
  renewToken,
}