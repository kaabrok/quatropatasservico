const app = require('./src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');


const port = 5000;
//const port = normalizePort(process.env.PORT || '7675');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log('Rodando na porta ' + port);


