import { resolve, sep } from 'path'
import { readFileSync } from 'fs'
import { homedir } from 'os'

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

export const readFile = (p: string, encode: string = 'utf8') =>
  readFileSync(p, encode)
