import { parse } from 'dotenv'
import { Loader } from '../types'

export class DotEnvLoader implements Loader {
  public load(raw: string | undefined): object | null {
    try {
      // todo: support nested
      return parse(raw)
    } catch (err) {
      return null
    }
  }
}

// const d = new DotEnvLoader()

// console.log(d.load(`
// a=name
// b="haha"
// `))
