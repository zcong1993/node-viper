export * from './config'

export interface Loader {
  load(paths: string[] | undefined): object | null
}
