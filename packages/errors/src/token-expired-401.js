import BusinessError from './parent-errors/business-error'
import CODE_ERROR from './e-code-error'

export default class TokenExpired extends BusinessError {
  constructor (message = 'The User\'s token is no longer valid, please request a new one') {
    super(401, CODE_ERROR.TOKEN_EXPIRED, message)
    this.name = this.constructor.name
  }
}
