const greet = function( name = '' ) {
  return `Hello ${name}! `.repeat(3);
}  

console.log(greet('Roman'))


const greet2 = ( name = '' ) => {
  return `Hi ${name} :D`
}
console.log(greet2('Danna'))

const greet3 = ( name = 'unknown' ) => `Nice to meet you ${name}`
console.log(greet3('Carlos'))

const helloWorld = () => `Hello World`
console.log(helloWorld())


export const getUser = () => ({
  uuid: 'ABC124',
  username: 'Romantico98'
})

const user = getUser();
console.log({ user })

export const getActiveUser = ( name = '' ) => {
  if ( name === 'Roman') {
    return {
      uuid: 'ABC456',
      username: name,
      isActive: true
    }
  }
  return {
    isActive: false,
  }
}
console.log(getActiveUser('Roman'))
console.log(getActiveUser(''))