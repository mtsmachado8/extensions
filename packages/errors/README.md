# `logger`

Módulo usado para logs da aplicação

## Usage CJS

```
const log = require('logger');
log.info('message')
```

## Usage ESM

```
import log from '@mtsmachado8/logger');
log.info('message')
```

## Variáveis de Ambiente
NODE_END || development
LOG_LEVEL || silly -> 

O NODE_ENV é usado para o formato do log (json para production e color para outros ambientes)
O LOG_LEVEL é usado para identificar qual nível de mensagem logar

## Levels
- silly
- info
- warn
- error
