exports.getLoggerConfig = function getLoggerConfig(loggerName) {
  return {
    type: 'dateFile',
    filename: `./${loggerName}/${loggerName}.log`,
    pattern: '.yyyy-MM-dd',
    daysToKeep: 30,
    keepFileExt: true,
    compress: true
  };
}