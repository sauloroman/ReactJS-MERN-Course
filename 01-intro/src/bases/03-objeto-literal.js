'use strict'

const person = {
  firstname: 'Tony',
  lastname: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 553221312,
    lat: 12.2323,
    lng: 34.64512,
  }
}

console.log( person )
console.table( person )

const person2 = {
  ...person
}


console.log(person)
console.log(person2)