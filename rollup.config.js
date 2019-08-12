import json from 'rollup-plugin-json'
import pkg from './package.json'

export default [
  {
    input: './country-list.js',
    output: { file: pkg.main, format: 'cjs' },
    plugins: [json()]
  },
  {
    input: './country-list.js',
    output: { file: pkg.module, format: 'esm' },
    plugins: [json()]
  }
]
