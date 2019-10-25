'use strict'

const logger = require('..')

describe('logger', () => {
  describe('Tracer', () => {
    it('deve escrever as mensagens em JSON, dentro de message', (done) => {
      const debug = jest.fn()
      const trace = logger.startTracer('TracerTest', debug)

      expect(debug).toHaveBeenCalledTimes(1)
      expect(debug).toHaveBeenLastCalledWith(
        expect.objectContaining({
          message: expect.any(String)
        })
      )

      setTimeout(() => {
        trace.step('foo')

        expect(debug).toHaveBeenCalledTimes(2)
        expect(debug).toHaveBeenLastCalledWith(
          expect.objectContaining({
            message: expect.any(String)
          })
        )
      }, 100)

      setTimeout(() => {
        trace.step('bar')

        expect(debug).toHaveBeenCalledTimes(3)
        expect(debug).toHaveBeenLastCalledWith(
          expect.objectContaining({
            message: expect.any(String)
          })
        )

        done()
      }, 200)
    })
  })
})
