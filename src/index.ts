import { join } from 'path'
import { existsSync, readFileSync } from 'fs'
import { RootConfig, supportTypes, Loader } from './types'
import { normalizeConfig, absPathify, getExt } from './utils'
import {
  DotEnvLoader,
  JsonLoader,
  TomlLoader,
  YamlLoader,
  loadEnv
} from './loaders'

type LoaderMap = { [key in supportTypes]: Loader }

const readFile = (p: string, encode: string = 'utf8') => readFileSync(p, encode)
export class Viper {
  private config: RootConfig
  private store: object
  private loaderMap: LoaderMap

  constructor(config: RootConfig) {
    this.config = normalizeConfig(config)
    this.store = {}
    this.loaderMap = {
      dotenv: new DotEnvLoader(),
      json: new JsonLoader(),
      yaml: new YamlLoader(),
      toml: new TomlLoader()
    }
  }

  public loadFiles(): object {
    if (!this.config.configPaths || this.config.configPaths.length === 0) {
      return this.store
    }

    for (let i = 0; i < this.config.configTypes.length; i++) {
      const t = this.config.configTypes[i]
      for (let j = 0; j < this.config.configPaths.length; j++) {
        const p = this.config.configPaths[j]
        const exts = getExt(t)
        for (let k = 0; k < exts.length; k++) {
          const ext = exts[k]
          const file = absPathify(join(p, this.config.configName + ext))
          // console.log(file)
          if (existsSync(file)) {
            const content = readFile(file)
            // console.log(t, content)
            const res = this.loaderMap[t].load(content)
            // console.log(res)
            this.store = {
              ...this.store,
              ...res
            }

            return {
              ...this.store
            }
          }
        }
      }
    }
  }

  public loadEnv(): object {
    const res = loadEnv(this.config.envPrefix)
    this.store = {
      ...this.store,
      ...res
    }

    return {
      ...this.store
    }
  }
}

// const c: RootConfig = {
//   configName: 'package',
//   configPaths: ['.']
// }

// const v = new Viper(c)

// console.log(v.loadFiles())
// console.log(JSON.stringify(v.loadEnv()))
