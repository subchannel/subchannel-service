# subchannel-service

**This repository is deprecated. We’ve realized this was a bad idea and a much better idea would be to use [hapi](http://hapijs.com)’s plugin system to compose our services.**

### Introduction

subchannel-service is a reusable, pre-configured [hapi](http://hapijs.com) server. It is set up with [good](https://github.com/hapijs/good) and [good-console](https://github.com/hapijs/good-console) for logging.

### Usage

Install subchannel-service using [npm](https://npmjs.org).

```
$ npm install --save subchannel-service
```

Then `require` and start your server.

```javascript
const server = require('subchannel-service');

server.start(() => {
  console.log("subchannel-service is running!");
});
```

`server` will be an instance of a hapi server so you can easily add new routes, plugins and configurations.

_For a slightly more complex example see the `examples` directory._
