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
NODE_END || development -> usado para o formato do log (json para production e color para outros ambientes)
LOG_LEVEL || silly -> usado para identificar qual nível de mensagem logar

## Levels
- silly
- info
- warn
- error
