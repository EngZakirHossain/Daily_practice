//get the button
const btn = document.getElementById('button');
btn.addEventListener('click', loadData);

function loadData() {
  //create object

  const xhr = new XMLHttpRequest();
  //panel setup / Open post
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  // run when data loaded
  xhr.onload = function () {
    if (this.status === 200) {
      const posts = JSON.parse(this.responseText);
      let output = '';
      posts.forEach(post => {
         output += `
      <ul>
        <li>  <h5> ID: ${post.id}</h5>      </li>
        <li>  <h6> User: ${post.userId}</h6>      </li>
        <li>  <h5> Title: ${post.title}</h5>      </li>
        <li>  <p> Body: ${post.body}</p>      </li>
      </ul>
      `;
      document.getElementById('post').innerHTML = output;
        
      });
      
    }
  }
  //ready srate values
  /* Use for making library
  0:request not initialized
  1:Server connection established
  2:request Received
  3:Process request
  4: Request finished and response is ready
  */
  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState===4) {
  //     console.log(this.responseText);
  //   }
  // }
  //send request
  xhr.send();
}