
//document.getElementbyId();

let val = document.getElementById('title');

console.log(val);

//get element items details

console.log(val.id);
console.log(val.className);

//change style
val.style.color = '#0891b2';
document.getElementById('title').style.textAlign ='Center' 

//change content
document.getElementById('title').innerText = 'Task Mangement'

document.querySelector('li:nth-child(odd)').style.color='red'
