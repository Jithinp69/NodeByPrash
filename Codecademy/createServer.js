const http = require('http');

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, Jithin</h1>');
  })
  .listen(3001, () => {
    console.log('server started @3001');
  });
