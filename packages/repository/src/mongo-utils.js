const getUrlFromEnv = () => {
  const user = process.env.DATABASE_USER || ''
  const pass = process.env.DATABASE_PASS || ''
  const host = process.env.DATABASE_HOST || '127.0.0.1'
  const port = process.env.DATABASE_PORT || '27017'
  const name = process.env.DATABASE_NAME || 'database'
  const srv = process.env.DATABASE_SRV || false
  const isSrv = srv === 'true'

  const protocolPart = isSrv
    ? 'mongodb+srv://'
    : 'mongodb://'

  const authPart = user
    ? `${user}:${pass}@`
    : ''

  const hostPart = isSrv
    ? `${host}`
    : `${host}:${port}`

  return `${protocolPart}${authPart}${hostPart}/${name}?authSource=admin`
}

export {
  getUrlFromEnv
}
