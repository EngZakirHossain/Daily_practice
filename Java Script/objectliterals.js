//Object Literals

let car = {
  name: 'Porche',
  model: 911,
  weight: 850,
  color:'red'
}
//access array property
// console.log(car.name);

//get the property of an object of an array ->array

let result = Object.getOwnPropertyNames(car);

let key = Object.keys(car);

// console.log(result, key);

//property value change

car.name = "lancer",
car.model = 'EVO 10',
car.weight = 980,
car.color = 'Black'

Object.defineProperty(car, "model", { value: 'Evo 9' })

//iteraction

let arr = [1,2,3,4,5,6,7,8,9]
for (const x of arr) {
  console.log(x)
}

// console.log(car);