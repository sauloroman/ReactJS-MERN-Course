const characters = ['Goku', 'Vegeta', 'Trunks']
const [ , , p3 ] = characters
console.log(p3)

export const returnArray = () => {
  return ['ABC', 124]
}
const [ letters, numbers ] = returnArray()
console.log(letters)
console.log(numbers)

const useState = ( value = null ) => {

  let currentValue = value

  return [ currentValue, ( newValue ) =>  currentValue = newValue ]

}

const [ number, setNumber ] = useState(5)

console.log(number)
setNumber( 10 )
console.log(number)