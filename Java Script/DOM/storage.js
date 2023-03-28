//save data to local and session storage
//local storage

let name = "Zakir Hossain";

localStorage.setItem('name',name); //set value as key value item

let result = localStorage.getItem('name');
console.log(result);

//session storage

sessionStorage.setItem('myName',name);
let myname = sessionStorage.getItem('myName')
console.log(myname);

//auth session

let auth= {
    name: 'Admin',
    email: 'admin@gmail.com',
    userCode: 'NID-456874589',
    status: 'success',
    token: 'jgdfjghdghsdglkdjghldkhgldfng',
};

localStorage.setItem('secret',JSON.stringify(auth));

let authValue = JSON.parse(localStorage.getItem('secret')) ;
console.log(authValue.token);