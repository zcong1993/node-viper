import { existsSync } from 'fs'
import { Loader } from '../types'
import { readFile } from '../utils'

export class JsonLoader implements Loader {
  public load(paths: string[] | undefined): object | null {
    const files = paths.map(p => (existsSync(p) ? p : null)).filter(Boolean)
    if (files.length < 1) {
      return null
    }
    const file = files[0]
    const content = readFile(file)
    try {
      return JSON.parse(content)
    } catch (err) {
      return null
    }
  }
}
