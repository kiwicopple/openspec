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

```
npx openspec new configspec
npx openspec new libspec
npx openspec new clispec
```


## Development

1. Download this repo
2. npm install
3. npm run test
   
