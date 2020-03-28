import RequestError from './parent-errors/request-error'
import CODE_ERROR from './e-code-error'

export default class AuthenticationFailed extends RequestError {
  constructor (message = 'User\'s authentication failed') {
    super(401, CODE_ERROR.AUTHENTICATION_FAILED, message)
    this.name = this.constructor.name
  }
}
