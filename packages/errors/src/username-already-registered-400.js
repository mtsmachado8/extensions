import RequestError from './parent-errors/request-error'
import CODE_ERROR from './e-code-error'

export default class UsernameAlreadyRegistered extends RequestError {
  constructor (message = 'The User\'s username is already registered') {
    super(400, CODE_ERROR.USERNAME_ALREADY_REGISTERED, message)
    this.name = this.constructor.name
  }
}
