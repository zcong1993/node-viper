export * from './config'

export interface Loader {
  load(raw: string | undefined): object | null
}
