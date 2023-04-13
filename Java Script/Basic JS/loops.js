/*loop in js

1.for loop --array
2. for each--array
3. for of --array/string
4. for in  ---object

*/

let countriesA = ['Mexico', 'France', 'Denmark', 'Italy', 'Spain', 'Brazil'];
// //basic for
// for (let index = 0; index < countriesA.length; index++) {
//   const element = countriesA[index];
//   console.log(element);  
// }

//for each

// countriesA.forEach(element => {
//   console.log(element);
// });

let person = {
  firstName: 'Zakir ',
  lastName: 'Hossain',
  age:26,
}

for (const pro in person) {
  if (Object.hasOwnProperty.call(person, pro)) {
    const element = person[pro];
    console.log(element);   
  }
}

for (const pro of countriesA) {
  console.log(pro);
}