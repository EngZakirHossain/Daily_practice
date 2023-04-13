//get the button
const btn_txt = document.getElementById('button-txt');
const btn_json = document.getElementById('button-json');
const btn_api = document.getElementById('button-api');
const post = document.getElementById('post');

btn_txt.addEventListener('click', () => {
  fetch('data.txt')
    .then((res) => {
      return res.text();
    }).then((data) => {
      console.log(data);
      post.innerHTML = data;
    }).catch((err) => {
      console.log(err);
    })
});
btn_json.addEventListener('click', () => {
  
  fetch('posts.json')
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      let output = '';
      data.forEach(post => {        
        output += `
          <p>  ${post.title}</p>
        `;
      })
      post.innerHTML = output;
    }).catch((err) => {
    console.log(err);
  })
})

btn_api = addEventListener('click',()=> {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      let output = '';
      data.forEach(todo => {        
        todo += `
          <p>  ${todo.title}</p>
        `;
      })
      post.innerHTML = output;
    }).catch((err) => {
      console.log(err)
  })

})



