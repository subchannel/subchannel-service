'use strict';

exports.env = process.env.NODE_ENV || 'development';
exports.host = process.env.NODE_SUBCHANNEL_HOST || 'localhost';
exports.port = process.env.NODE_SUBCHANNEL_PORT || 8088;
