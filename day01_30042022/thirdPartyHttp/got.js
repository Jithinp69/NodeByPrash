const got = require('got');
got.get('http://localhost:3050/menu', {responseType : 'json'})
.then(res => {
    console.log(res.body);
}).catch(err =>{
    console.log('Error Occcured');
})