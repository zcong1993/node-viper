export type supportTypes = 'json' | 'yaml' | 'toml' | 'env'

export interface RootConfig {
  configName?: string
  configPaths?: string[]
  configType?: supportTypes
}
