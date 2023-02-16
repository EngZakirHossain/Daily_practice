//array method
//total index 0-5  0          1         2         3         4       5
let countriesA = ['Mexico', 'France', 'Denmark', 'Italy', 'Spain', 'Brazil']
let countriesB = ['Argentina', 'England', 'Germany', 'Iran', 'Poland', 'Japan']

// console.log(countries.length); //lenth

/*enter or insert 
1.push  ---insert data on last entry
2.unshift ---Isert Data on 1st 
*/
// countries.push('Argentina');
// countries.unshift('Germany');

// console.log(countries);

/*Eject or find date 
1.pop  ---find data  last entry
2.shift ---find Data  1st entry
*/
// countries.pop();
// console.log(countries);

// countries.shift();
// console.log(countries);

/*
Concat or marge Two Array
*/

// console.log(countriesA.concat(countriesB));

/*Reversing Array */

// console.log(countriesA.reverse());
//tostring ---to convert string

// console.log(countriesA.toString());

/*Includes ---check is this array has the given array
  return type Boolean 
*/

// console.log(countriesA.includes('Brazil'));

/* Usefull Method that must be known 
Map    ---specific callback function run for each element and return a new array
fitter  ---fitter out on a single condition on each element return array
find    ---find only return the value of first match element  value 
every   --check every elemnt in array if the condition match for all the element or not 
findindex ---finde index number same as find method
reduce  ---- reducer function for each array element 
splice  --- remove element from array and return with array
slice
*/

//Map Method
//es6 method
// let result = countriesA.map(element => element + " - Word cup 2022");
//fitter out data
let fifapoints = [5, 6, 2, 3, 5, 6];
// let result = fifapoints.filter(element => element > 3);
//find
// let result = fifapoints.find(element => element > 3);
//every
// let result = fifapoints.every(element => element > 1);
//find index
// let result = fifapoints.findIndex(element => element > 5);
//reduce
// let result = fifapoints.reduce((prev,curr) => prev+curr,1);
//splice
let result = countriesA.splice(0, 2);
//slice
let result1 = countriesA.slice(0,2);


console.log(result,result1);

