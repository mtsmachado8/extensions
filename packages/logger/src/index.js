/* global BigInt */
const { hostname } = require('os')
const { createLogger, transports, format } = require('winston')
const { combine, colorize, printf, timestamp, errors, json } = format

const LEVEL = process.env.LOG_LEVEL
const ENV = process.env.NODE_ENV || 'development'

const colorFormat = combine(
  errors({ stack: true }),
  colorize(),
  printf(logMessage => `${logMessage.level}: ${logMessage.message}`)
)
const jsonFormat = combine(
  errors({ stack: true }),
  timestamp(),
  json()
)

const logger = createLogger({
  level: LEVEL || 'info',
  format: ENV === 'development' ? colorFormat : jsonFormat,
  defaultMeta: {
    hostname: hostname()
  },
  transports: [
    new transports.Console({
      handleExceptions: true
    })
  ]
})

logger.stream = {
  write: message => {
    logger.info(message)
  }
}

logger.startTracer = (traceName, debug = logger.debug) => {
  const parse = v => `${(v / BigInt(1000000))}ms`
  const start = process.hrtime.bigint()
  let index = 1
  let total = BigInt(0)
  const msg = msg => debug({ message: `${traceName}: msg` })

  msg('started')

  return {
    step: (description) => {
      const diff = process.hrtime.bigint() - start - total
      total += diff

      msg(`step[${index++}]: ${description} time: ${parse(diff)} total: ${parse(total)}`)
    }
  }
}

module.exports = logger
