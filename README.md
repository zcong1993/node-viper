# node-viper

[![NPM version](https://img.shields.io/npm/v/@zcong/viper.svg?style=flat)](https://npmjs.com/package/@zcong/viper) [![NPM downloads](https://img.shields.io/npm/dm/@zcong/viper.svg?style=flat)](https://npmjs.com/package/@zcong/viper) [![CircleCI](https://circleci.com/gh/zcong1993/node-viper/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/node-viper/tree/master) [![codecov](https://codecov.io/gh/zcong1993/node-viper/branch/master/graph/badge.svg)](https://codecov.io/gh/zcong1993/node-viper)

> config loader for NodeJS

## Usage

```js
const { Viper } = require('@zcong/viper')

const viper = new Viper({
  configName: 'config',
  configPaths: ['.'],
  configTypes: ['json']
})

console.log(viper.loadFiles())
console.log(viper.loadEnv())
```

### config
```ts
interface RootConfig {
  configName?: string
  configPaths?: string[]
  configTypes?: supportTypes[]
  envPrefix?: string
}
```

#### `RootConfig.configName`
config file name without extension, eg: 'config', '.env'
#### `RootConfig.configPaths`
- config file load paths, eg: ['.']

- if start with `$` will be replaced by env, eg: `$HOME/test` will be `~/test`
#### `RootConfig.configTypes`
config file extensions, allowed is array of `type supportTypes = 'json' | 'yaml' | 'toml' | 'dotenv'`, default is `['json', 'yaml', 'toml', 'dotenv']`
#### `RootConfig.envPrefix`
if set, only load key of env whitch has this prefix. eg: set `RootConfig.envPrefix = 'VIPER'`, only load `VIPER_TEST`, `VIPER_FILE`, `TEST` will be ignored.

`VIPER_` or `VIPER` will be treated as `VIPER_`

### `Viper`

#### `Viper.loadFiles()`
search config files by the order of `configPaths` and `configTypes` , will load the first finded and valid config file as return.

#### `Viper.loadEnv()`
load config from env.

you can call both of the two method, but the first will be merged by the second.

## License

MIT &copy; zcong1993
