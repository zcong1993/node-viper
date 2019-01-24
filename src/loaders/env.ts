export const loadEnv = (prefix: string = ''): object => {
  const res: { [key: string]: string } = {}
  const source = {
    ...process.env
  }
  if (!prefix) {
    return source
  }

  Object.keys(source)
    .filter(k => k.startsWith(prefix + (prefix.endsWith('_') ? '' : '_')))
    .forEach(k => {
      res[k] = source[k]
    })
  return res
}

// console.log(loadEnv('GITHUB_'))
