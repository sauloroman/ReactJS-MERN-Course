const moment = require('moment')

const isDate = ( value, { req, location, path } ) => {

  if ( !value ) return false

  const date = moment( value )

  if ( !date.isValid ) return true

  return true
}

module.exports = { isDate }