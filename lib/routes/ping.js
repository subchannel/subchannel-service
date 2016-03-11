'use strict';

const ping = require('../handlers/ping');

module.exports = {
  method: 'GET',
  path: '/ping',
  handler: ping
};
