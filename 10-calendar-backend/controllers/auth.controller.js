const { response, request } = require('express')

const createUser = async (req = request, res = response ) => {
  
  const { name, email, password } = req.body

  res.status(201).json({
    ok: true,
    msg: 'Register user',
    name,
    email,
    password
  })

}

const loginUser = async (req = request, res = response ) => {

  const { email, password } = req.body

  res.json({ ok: true, msg: 'login', email, password })
}

const renewToken = async (req = request, res = response ) => {
  res.json({ ok: true, msg: 'renew' })
}

module.exports = {
  createUser,
  loginUser,
  renewToken,
}