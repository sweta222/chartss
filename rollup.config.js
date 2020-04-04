import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const build = 'build';
export default {
  input: 'src/main.js',
  output: [
    {
      name: 'myBundle',
      file: `${build}/charts.js`,
      format: 'umd',
    },
    {
      name: 'bundleMin',
      file: `${build}/charts.min.js`,
      format: 'umd',
      plugins: [terser()],
    },
  ],
  plugins: [eslint, resolve()],
};
