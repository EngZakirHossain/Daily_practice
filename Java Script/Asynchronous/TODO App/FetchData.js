//Data fetch url link 
class FetchData{
  //get data
  async get(url_link) {
    const res = await fetch(url_link);
    const resData = await res.json();
    return resData;
  }
  //postdata
  async post(url_link, data) {
    const res = await fetch(url_link,{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const resData = await res.json(); 
    return resData;
  }
}