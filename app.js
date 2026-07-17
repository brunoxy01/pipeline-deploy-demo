const http = require('http');

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hello World from pipeline-deploy-demo!';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${message}\n`);
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
