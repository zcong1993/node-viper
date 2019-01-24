import { absPathify, normalizeConfig, getExt } from '../../src/utils'
import { RootConfig, supportTypes } from '../../src/types'

it('absPathify should works well', () => {
  expect(absPathify('$HOME/test').startsWith('$HOME')).toBeFalsy()
  expect(absPathify('$PWD/test')).toBe(process.cwd() + '/test')
  expect(absPathify('.')).toBe(process.cwd())
})

it('normalizeConfig should works well', () => {
  const configs: RootConfig[] = [
    {},
    {
      configName: 'test',
      configPaths: ['.']
    },
    {
      configTypes: ['json']
    }
  ]
  configs.forEach(config => expect(normalizeConfig(config)).toMatchSnapshot())
})

it('should throw for bad config', () => {
  const configs: RootConfig[] = [
    {
      configName: 'test'
    },
    {
      configPaths: ['.']
    }
  ]

  configs.forEach(config => {
    expect(() => normalizeConfig(config)).toThrow()
  })
})

it('getExt should works well', () => {
  expect(getExt('dotenv')).toEqual([''])
  expect(getExt('json')).toEqual(['.json'])
  expect(getExt('toml')).toEqual(['.toml'])
  expect(getExt('yaml')).toEqual(['.yml', '.yaml'])
})
