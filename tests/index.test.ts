import { handleInput } from '../src/handler'

describe('Hand all inputs', () => {
  /**
   * Invalid inputs
   */
  it('Handle invalid commands', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    handleInput('invalid')
    expect(consoleSpy).toHaveBeenCalledWith('Unrecognized command:', 'invalid')
  })
  /**
   * Validation
   */
  it('validate', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    handleInput('validate', {
      input: './tests/cli/valid.yml',
      output: './tests/cli/valid-out.yml',
    })
  })

  /**
   * Dereferencing
   */
  it('dereference', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    handleInput('dereference')
    expect(consoleSpy).toHaveBeenCalledWith('Not yet implemented.')
  })
})
