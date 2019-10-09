import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'VLazyImg'
  },
  plugins: [
    babel(),
    nodeResolve({ mainFields: ['module', 'main'] })
  ]
}
