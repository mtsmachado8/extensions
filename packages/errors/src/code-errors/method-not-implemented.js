import CodeError from '../parent-errors/code-error'
import CODE_ERROR from '../../e-code-error'

export default class MethodNotImplemented extends CodeError {
  constructor (message = 'Method not implemented yet!') {
    super(500, CODE_ERROR.INTERNAL_ERROR, message)
    this.name = this.constructor.name
  }
}
