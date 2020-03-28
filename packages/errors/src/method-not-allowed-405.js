import RequestError from './parent-errors/request-error'
import CODE_ERROR from './e-code-error'

export default class MethodNotAllowed extends RequestError {
  constructor (message = 'Method Not Allowed') {
    super(405, CODE_ERROR.METHOD_NOT_ALLOWED, message)
    this.name = this.constructor.name
  }
}
