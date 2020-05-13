import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default {
  input: './src/index.js',
  output: [
    { file: pkg.browser, format: 'umd', name: pkg.name, plugins: [terser()] },
    { file: pkg.main, name: pkg.name, format: 'umd' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [
    babel(),
    nodeResolve({ mainFields: ['module', 'main'] }),
    filesize({ showBrotliSize: true })
  ]
}
