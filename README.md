# OpenSpec

The missing specifications.

While we have a good spec for describing RESTful APIs (OpenAPI), there isn't anything robust for other tooling. 
OpenSpec aims to fill the gap:

- `ConfigSpec`: describe configuration, such as environment variables.
- `LibSpec`: describe a Client Library, such as a Go or Javascript package.
- `CliSpec`: describe the commands and usage of a CLI (similar to manpages).

All specs are written in YAML - for many of the same reasons that OpenAPI is in YAML/JSON.

## Why

With a standard way of describing tools, we can create generators and translators.
For example, we can use them to build docs, generate tests, or generate client libraries in different languages. 

## Usage

This CLI will:

- validate that a spec is accurate
- transform a spec between YAML and JSON 
- "Dereference" any values. For example, if a Function argument references a type then it will populate the `$ref` with the value.
  

```
@supabase/openspec <command> [options]

Commands:

    validate                Validates a Spec file.

    dereference             Dereferences any definition references. Can be used to bundle multiple files.

Options:
    -h, --help              Show help for any command
    -v, --version           Output the CLI version number
    -d, --debug [filter]    Show debug output, optionally filtered (e.g. "*", "swagger:*", etc.)

```


## Future ideas:

- Generators: in theory the spec can be used to generate docs (eg, ManPages), boilerplate code, and tests for your CLI/Lib/etc

## Development

1. Download this repo
2. npm install
3. npm run test
   
## Credits

- Thanks to [swagger-cli](https://github.com/APIDevTools/swagger-cli) for some of the inspiration and code. 
