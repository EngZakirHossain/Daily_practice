/*
Data type in js 
1. String->any text
2. Number->12345
3.Boolean -> true or false
4.null->null
5.undefined ->undefined
6. Symbol ->symbol(something)

//non primitive

7. Object->{key:'value'}
    --array[1,2,"name"]
    --function name(){}


*/

let age = 35;
let name = "Zakir";
let isChild = false;
let firstName = null;

//function
// function fullname(name,age) {
//   return name + age;
// }
//array
let Countries = ["BD", "IND", "BRA", "IRAN"];

//object can hold any thype of data . most use in js 
let Person = {
  name : 'Zakir Hossain',
  number: "017182597506",
  age: 35,
  Hobby: [
    "Book","Bike Ride","coding","GYM"
  ],
  fullname() {
    return this.name+this.number
  }
}

// let result = fullname(Person.name,Person.age)

console.log(Person.fullname());
