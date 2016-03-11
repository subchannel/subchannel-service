'use strict';

const server = require('../lib');

server.route({
  method: 'GET',
  path: '/',
  handler: function root(_, reply) {
    return reply({
      response: 'Hello from Subchannel!'
    });
  }
});

server.start(err => {
  if (err) throw err;
  console.log('subchannel-service running at %s', server.info.uri);
});
