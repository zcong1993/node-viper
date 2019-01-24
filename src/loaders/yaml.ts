import { safeLoad } from 'js-yaml'
import { Loader } from '../types'

export class YamlLoader implements Loader {
  public load(raw: string | undefined): object | null {
    try {
      return safeLoad(raw)
    } catch (err) {
      return null
    }
  }
}

// const y = new YamlLoader()
// console.log(y.load('greeting: hello\nname: world'))
