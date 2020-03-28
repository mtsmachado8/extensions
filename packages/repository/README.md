# Repository

Módulo usado para conectar o mongoose ao projeto de forma simples.

## Environment Variables
DATABASE_USER || ''  
DATABASE_PASS || ''  
DATABASE_HOST || '127.0.0.1'  
DATABASE_PORT || '27017'  
DATABASE_NAME || 'database'  
DATABASE_SRV  || false

## Usage
```
import repository from '@mtsmachado8/repository'

repository.start()
  .then(() => {
    log.info('Connected to db')
  })
  .catch(e => {
    log.info(`Error connecting to db: ${e}`)
  })
```