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