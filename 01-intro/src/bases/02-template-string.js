const firstname = 'Roman'
const lastname = 'Santillan'

const fullName = firstname + " " + lastname
const fullNameTemplateString = `${firstname} ${lastname}`

console.log(fullName, fullNameTemplateString)

export function getGreeting( name ) {
  return 'Hello ' + name
}

console.log(`Este es un texto: ${getGreeting('Roman')}`)