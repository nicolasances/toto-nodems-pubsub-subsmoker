var Controller = require('toto-api-controller');
var TotoEventConsumer = require('toto-event-consumer');

var handleEvent = require('./evt/HandleEvent');
var getEvent = require('./dlg/GetEvent');

// API Name
var apiName = 'pubsub-pubsuber';

// Consumer setup 
var consumer = new TotoEventConsumer(apiName, 'totoPubsubSmoke', handleEvent.do);

// Api setup
var api = new Controller(apiName, null, consumer);

api.path('GET', '/events/:id', getEvent);

api.listen();