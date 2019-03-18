import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [commonjs()]
}
