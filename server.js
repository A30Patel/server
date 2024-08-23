const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src', 'jobs.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

// Listen on the port provided by Render or default to 8000
server.listen(process.env.PORT || 8000, () => {
  console.log('JSON Server is running');
});
