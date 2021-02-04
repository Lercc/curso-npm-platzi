// import axios from 'axios';
const axios = require('axios').default;

const getUsers = () => {
    axios.get('http://127.0.0.1:8000/api/V1/users/6')
  .then(function (response) {
    console.log('RESPONSE.DATA')
    console.log(response.data);
  })
  .catch(function (error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('DATA')
        console.log(error.response.data);
        console.log('STATUS')
        console.log(error.response.status); 
        console.log('HEADER')
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('ERROR REQUEST')
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('ERROR MESSAGE')
        console.log('Error', error.message);
      }
    
      
      console.log('CONFIG')
      console.log(error.config);
  });
}
const postUsers = () => {
    axios.post('http://127.0.0.1:8000/api/V1/users')
  .then(function (response) {
    console.log('RESPONSE.DATA')
    console.log(response.data);
  })
  .catch(function (error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('DATA')
        console.log(error.response.data);
        console.log('STATUS')
        console.log(error.response.status); 
        console.log('HEADER')
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('ERROR REQUEST')
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('ERROR MESSAGE')
        console.log('Error', error.message);
      }
    
      
      console.log('CONFIG')
      console.log(error.config);
  });
}
console.log('*******************************************')
console.log('*******************************************')
console.log('*******************************************')
// getUsers()
postUsers()