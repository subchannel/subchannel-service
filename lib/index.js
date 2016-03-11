'use strict';

const Hapi = require('hapi');
const Good = require('good');
const GoodConsole = require('good-console');

const routes = require('./routes');
const config = require('./config');

const server = new Hapi.Server();

server.connection({
  host: config.host,
  port: config.port
});

if (config.env !== 'test') {
  const logger = {
    register: Good,
    options: {
      reporters: [{
        reporter: GoodConsole,
        events: {
          log: '*',
          response: '*',
          ops: '*',
          error: '*'
        }
      }]
    }
  };

  server.register(logger, err => {
    if (err) throw err;
    return;
  });
}

server.route(routes);

module.exports = server;
