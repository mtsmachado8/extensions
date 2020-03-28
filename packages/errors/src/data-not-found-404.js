import RequestError from './parent-errors/request-error'
import CODE_ERROR from './e-code-error'

export default class DataNotFound extends RequestError {
  constructor (code = CODE_ERROR.DATA_NOT_FOUND, message = 'The data was not found') {
    super(404, code, message)
    this.name = this.constructor.name
  }
}
