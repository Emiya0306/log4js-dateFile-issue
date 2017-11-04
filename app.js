var log4js = require('log4js');
var helper = require('./helper');

log4js.configure({
  appenders: {
    system: helper.getLoggerConfig('system'),
    http: helper.getLoggerConfig('http')
  },
  categories: {
    default: {
      appenders: [
        'http',
        'system'
      ],
      level: 'debug'
    }
  }
});

const httpLogger = log4js.getLogger('http');

httpLogger.info('123');
