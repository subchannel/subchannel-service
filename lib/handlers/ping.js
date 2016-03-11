'use strict';

module.exports = function ping(_, reply) {
  return reply({
    response: 'pong'
  });
};
