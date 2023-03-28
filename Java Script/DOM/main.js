
// //document.getElementbyId();

// let val = document.getElementById('title');

// console.log(val);

// //get element items details

// console.log(val.id);
// console.log(val.className);

// //change style
// val.style.color = '#0891b2';
// document.getElementById('title').style.textAlign ='Center' 

// //change content
// document.getElementById('title').innerText = 'Task Mangement'

// document.querySelector('li:nth-child(odd)').style.color = 'red'

// const listItems = document.querySelectorAll('.list-group-item')
// console.log(listItems);

// listItems.forEach((item, index) => {
//   console.log(item.className, item.index);
//   item.textContent = `${index+1} Zakir Hossain`;
// }); 

// console.log(listItems);

//create new element

const listelement = document.createElement('li');
//added class/id name

listelement.className = 'list-group-item d-flex justify-content-between align-items-center';
listelement.id = 'new-item';
//add attribute
listelement.setAttribute('title', 'New task item');

console.log(listelement);

//create text note and append
listelement.appendChild(document.createTextNode('New task'))
//add text a tag

const link = document.createElement('a');
link.innerHTML = '<i class="fas fa-times text-primary"></i>';
listelement.appendChild(link)

document.querySelector('ul.list-group').appendChild(listelement);

//remove element

const removelist = document.querySelector('ul');
const removeItems = document.querySelectorAll('li');

removelist.removeChild(removeItems[2]);