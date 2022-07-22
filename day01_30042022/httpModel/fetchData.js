const http = require('http');
const data = [
    {
        dishType: 'Veg',
        dishName: 'Paneer Tikka',
        dishPrice: 200
    },
    {
        dishType: 'Veg',
        dishName: 'Paneer Tikka Masala',
        dishPrice: 250
    },
    {
        dishType: 'Non-Veg',
        dishName: 'Chicken Tikka',
        dishPrice: 300
    },
    {
        dishType: 'Veg',
        dishName: 'Paneer Bhurji',
        dishPrice: 220
    }
]
http.createServer((req,res) => {
    if(req.url === '/menu' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(JSON.stringify(data));
    res.end();
} else {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Req not supported');
}
}).listen(3050, ()=>{
    console.log('server started @  3050');
});