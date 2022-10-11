import * as http from "http";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Welcome Home');
  } else if (req.url === '/tcs' && req.method === 'GET') {
    res.end('HI TSC');
  } else {
    res.statusCode = 404;
    res.end('404: Not Found');
  }
});

server.listen(port, function () {
  console.log('Server running at http://127.0.0.1' + ':' + port + '/');
});
