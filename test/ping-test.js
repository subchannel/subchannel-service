'use strict';

const assert = require('assert');
const request = require('request');
const server = require('../lib');

describe('subchannel-service', () => {
  before(() => {
    server.start();
  });

  it('should respond to /ping', done => {
    request(`${server.info.uri}/ping`, (_, response) => {
      assert.equal(200, response.statusCode);
      done();
    });
  });
});
