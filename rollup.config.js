import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
// import externalGlobals from 'rollup-plugin-external-globals';
// externalGlobals({ d3: 'd3' });
const examples = 'examples';
export default {
  input: 'src/main.js',
  output: [
    {
      name: 'myBundle',
      file: `${examples}/charts.umd.js`,
      format: 'umd',
    },
    {
      name: 'myBundle',
      file: `${examples}/charts.umd.min.js`,
      format: 'umd',
      plugins: [terser()],
    },
  ],
  plugins: [eslint(), resolve()],
};
