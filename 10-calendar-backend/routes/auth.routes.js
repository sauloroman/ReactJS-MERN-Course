// User Routes / auth
// host + /api/auth

const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validate-fields.middleware')

const router = Router()

const { createUser, loginUser, renewToken } = require('../controllers/auth.controller')

router.post(
  '/register', 
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    validateFields,
  ], 
  createUser 
)

router.post(
  '/', 
  [
    check('email', 'El email no es valido').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateFields
  ], 
  loginUser 
)

router.get('/renew', renewToken )

module.exports = router