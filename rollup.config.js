import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
//import externalGlobals from 'rollup-plugin-external-globals';
//externalGlobals({ d3: 'd3' });
const examples = 'examples';
export default {
  input: 'src/main.js',
  output: {
    name: 'myBundle',
    file: `${examples}/bundle.umd.js`,
    format: 'umd'
  },
  plugins: [eslint, resolve()]
};
