# `logger`

Módulo usado para logs da aplicação

## Usage CJS

```
const log = require('logger');
log.info('message')
```

## Usage ESM

```
import log from '@mtsmachado8/logger';
log.info('message')
```

## Environment Variables
NODE_ENV || development 
LOG_LEVEL || silly 

### Uso da variáveis pelo módulo:
NODE_ENV -> usado para o formato do log (json para production e color para outros ambientes)
LOG_LEVEL -> usado para identificar qual nível de mensagem logar

## Levels
- silly
- info
- warn
- error
