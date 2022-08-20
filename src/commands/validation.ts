const yaml = require('js-yaml')
const fs = require('fs')

type ValidationOptions = {
  input: string
  i?: string
  output: string
  o?: string
}

export default function validation(options: ValidationOptions): void {
  const { error, input, output } = validateOptions(options)

  if (error.length > 0) {
    return
  }

  const docSpec = yaml.load(fs.readFileSync(input, 'utf8'))
  const outputFileName = output
  fs.writeFileSync(outputFileName, JSON.stringify(docSpec, null, 2))
}

const validateOptions = (options: ValidationOptions) => {
  const error = []
  const formatted = { ...options }
  if (!options.input) {
    error.push('Missing input file.')
  }
  if (!options.output) {
    error.push('Missing output file.')
  }
  if (options.i) {
    formatted.input = options.i
  }
  if (options.o) {
    formatted.output = options.o
  }
  return { error, ...formatted }
}
