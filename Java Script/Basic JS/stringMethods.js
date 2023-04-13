//string and string method

let par = "Vue JS 3 MasterClass, with JavaScript Fundamentals";

//length
console.log(par.length);

//uppercase lowercase

console.log(par.toUpperCase(), par.toLocaleLowerCase());

//string addition just use + sign before your text
console.log(par + " by Ibrahim");

//slice , substring , substr  --small parts

console.log(par.slice(0,8)); //end index er ager numberof inbex porjonto nibe
console.log(par.substring(0, 8)); //end er age porjonto e nibe
console.log(par.substr(0, 8));

//to replace text

console.log(par.replace("JavaScript", "JS"));

//split

let address = "end, index, er, ager, numberof, inbex, porjonto, nibe";
console.log(address.split(','));