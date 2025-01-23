const person = {
  name: 'Roman',
  age: 45,
  key: 'ironman'
}

const { name, age, key } = person

console.log(name)
console.log(age)
console.log(key)

const useContext = ({ key, name, age, range = 'Captain'}) => {

  console.log(name, age, range)

  return {
    keyName: key,
    age,
    latlng: {
      lat: 14.1232,
      lng: -12.1231
    }
  }

} 

const { keyName, age: anios, latlng: { lat, lng } } = useContext( person )

console.log(keyName, age )
console.log({ lat, lng })

