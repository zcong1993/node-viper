export * from './config'

export interface Loader {
  load(): object | null
}
