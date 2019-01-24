import { parse } from 'toml'
import { Loader } from '../types'

export class TomlLoader implements Loader {
  public load(raw: string | undefined): object | null {
    try {
      return JSON.parse(JSON.stringify(parse(raw)))
    } catch (err) {
      console.log(err)
      return null
    }
  }
}

// const t = new TomlLoader()
// const res = t.load(`
// [[products]]
// name = "Hammer"
// sku = 738594937

// [[products]]

// [[products]]
// name = "Nail"
// sku = 284758393
// color = "gray"
// `)
// console.log(res)
