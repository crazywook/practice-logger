const log4js = require('log4js');

const workingConfigure = {
  appenders: { cheese: { type: 'stdout',  } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
};

const testConfigure = {
  appenders: {
    default: {
      type: 'stdout'
    }
  },
  categories: {
    default: {
      appenders: ['default'], level: 'error'
    }
  }
}

log4js.configure(testConfigure);
 
const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
