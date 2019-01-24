export type supportTypes = 'json' | 'yaml' | 'toml' | 'dotenv'

export interface RootConfig {
  configName?: string
  configPaths?: string[]
  configTypes?: supportTypes[]
  envPrefix?: string
}
