const axios = require('axios');

 async function fechData(id) {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)

  console.log(data);
  return data
}

// fechData(1)

module.exports = fechData
