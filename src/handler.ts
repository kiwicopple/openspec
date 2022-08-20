import validation from './commands/validation'

export function handleInput(command: string, options?: any) {
  switch (command) {
    case 'validate':
      validation(options)
      break

    case 'dereference':
      console.log('Not yet implemented.')
      break

    default:
      console.log('Unrecognized command:', command)
      break
  }
}
