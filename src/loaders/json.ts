import { Loader } from '../types'

export class JsonLoader implements Loader {
  public load(raw: string | undefined): object | null {
    try {
      return JSON.parse(raw)
    } catch (err) {
      return null
    }
  }
}

// export class JsonLoader implements Loader {
//   public load(paths: string[] | undefined): object | null {
//     const files = paths.map(p => (existsSync(p) ? p : null)).filter(Boolean)
//     if (files.length < 1) {
//       return null
//     }
//     const file = files[0]
//     const content = readFile(file)
//     try {
//       return JSON.parse(content)
//     } catch (err) {
//       return null
//     }
//   }
// }
