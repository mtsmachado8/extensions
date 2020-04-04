import { hostname } from 'os'
import { createLogger, transports, format } from 'winston'

const { combine, colorize, printf, timestamp, errors, json } = format
const LEVEL = process.env.LOG_LEVEL
const NODE_ENV = process.env.NODE_ENV || 'development'

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

const log = createLogger({
  level: LEVEL || 'silly',
  format: NODE_ENV === 'production' ? jsonFormat : colorFormat,
  defaultMeta: {
    hostname: hostname()
  },
  transports: [
    new transports.Console({
      handleExceptions: true
    })
  ]
})

export default log
