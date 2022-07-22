const axios = require('axios');
axios.get('http://localhost:3050/menu')
.then(res =>{
    console.log(res.data);
}).catch(err =>{
    console.log("Error occured");
})