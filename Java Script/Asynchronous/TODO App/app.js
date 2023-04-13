const data = new FetchData();
//get all to dotos
const listGroup = document.querySelector('.list-group');
const btnAdd = document.getElementById('add_task');
const taskName = document.getElementById('task_name');

const getTodos = () => {
  data.get('https://jsonplaceholder.typicode.com/todos')
  .then((data) => {
    let output = '';
    data.forEach(todo => {
      output += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
            ${todo.title}
            <a href="#" data-mdb-toggle="tooltip" title="Remove item">
              <i class="fas fa-times text-primary"></i>
            </a>
          </li>       
      `
    })
    listGroup.innerHTML = output;
  })
  .catch((err) => {
  
})
}

const createTodo = () => {
  
  const formData = {
    "userId": 1,    
    "title": taskName.value,
    "completed": false
  }
  data.post('https://jsonplaceholder.typicode.com/todos', formData)
    .then((data) => {
    console.log(data);
    }).catch((err) => {
    console.log(err);
    })
  getTodos();
  
}

getTodos();
btnAdd.addEventListener('click', createTodo);
