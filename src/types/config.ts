export type supportTypes = 'json' | 'yaml' | 'toml' | 'dotenv'

export interface RootConfig {
  configName?: string
  configPaths?: string[]
  configType?: supportTypes[]
  envPrefix?: string
}
