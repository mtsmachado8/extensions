import mongoose from 'mongoose'
import log from '@mtsmachado8/logger'
import { getUrlFromEnv } from './mongo-utils'

let connectionPool = null

const start = async () => {
  if (isConnected()) { return connectionPool }

  configDeprecatedWarnings()

  const { dbPath, dbUser, dbPass } = dbVariables()

  try {
    connectionPool = await mongoose.connect(dbPath, {
      user: dbUser,
      pass: dbPass,
      poolSize: 10,
      promiseLibrary: Promise,
      socketTimeoutMS: 10000
    })
  } catch (err) {
    log.error('An error happened on database startup: ', err)
    throw err
  }
}

const stop = async () => {
  if (isConnected()) {
    await connectionPool.disconnect()
    log.info('Disconnected from database')
  }

  connectionPool = null
}

const isConnected = () => {
  return !!connectionPool
}

const configDeprecatedWarnings = () => {
  mongoose.set('useCreateIndex', true) // To avoid a deprecated warning: collection.ensureIndex
  mongoose.set('useNewUrlParser', true) // To avoid a deprecated warning: URL string parser
  mongoose.set('useFindAndModify', false) // To avoid a deprecated warning: collection.findAndModify
  mongoose.set('useUnifiedTopology', true) // To avoid a deprecated warning: useUnifiedTopology
}

const dbVariables = () => {
  const dbUser = process.env.DATABASE_USER
  const dbPass = process.env.DATABASE_PASS
  const dbPath = getUrlFromEnv()
  return { dbPath, dbUser, dbPass }
}

/**
 * The current connection pool, if any
 * @returns {Mongoose.Connection}
 */
const getPool = () => {
  return connectionPool
}

const repository = {
  configDeprecatedWarnings,
  dbVariables,
  start,
  stop,
  isConnected,
  getPool
}

export default repository
