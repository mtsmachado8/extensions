# Mtsmachado8 extensions
My personal extensions for nodejs

## Available Extensions:
 - @mtsmachado8/errors
 - @mtsmachado8/logger
 - @mtsmachado8/repository
 
# `Errors`

Módulo usado para Erros da Api

## Usage CJS

```
const AuthenticationFailed = require('@mtsmachado8/errors/authentication-failed-401');
throw new AuthenticationFailed();
```
this will throw a 401 error with a default message
or
```
const AuthenticationFailed = require('@mtsmachado8/errors/authentication-failed-401');
throw new AuthenticationFailed('My custom AuthenticationFailed message');
```

## Usage ESM

```
import AuthenticationFailed from '@mtsmachado8/errors/authentication-failed-401';
throw new AuthenticationFailed();
```
this will throw a 401 error with a default message
or
```
import AuthenticationFailed from '@mtsmachado8/errors/authentication-failed-401';
throw new AuthenticationFailed('My custom AuthenticationFailed message');
```

# Logger

Módulo usado para logs da aplicação

## Usage CJS

```
const log = require('@mtsmachado8/logger');
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

```
