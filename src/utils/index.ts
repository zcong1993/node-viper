import { resolve, sep } from 'path'
import { homedir } from 'os'
import { RootConfig, supportTypes } from '../types'

const supportTps: supportTypes[] = ['json', 'yaml', 'toml', 'dotenv']

export const absPathify = (p: string): string => {
  let pp: string = p

  if (pp.startsWith('$HOME')) {
    pp = homedir() + p.slice(5)
  }

  if (pp.startsWith('$')) {
    const index = pp.indexOf(sep)
    pp = process.env[p.slice(1, index)] + p.slice(index)
  }

  return resolve(pp)
}

const validateConfig = (c: RootConfig) => {
  if ((c.configName && !c.configPaths) || (!c.configName && c.configPaths)) {
    throw new Error('configName and configPaths should both set or null')
  }
}

export const normalizeConfig = (c: RootConfig): RootConfig => {
  validateConfig(c)
  if (!c.configTypes) {
    c.configTypes = supportTps
  } else {
    c.configTypes = c.configTypes.filter(t => supportTps.includes(t))
  }

  return c
}

export const getExt = (t: supportTypes): string[] => {
  if (t === 'dotenv') return ['']
  if (t === 'yaml') return ['.yml', '.yaml']
  return [`.${t}`]
}
