import eslint from 'rollup-plugin-eslint';
// const examples = 'examples';
// export default {
//   input: 'src/main.js',
//   output: [
//     {
//       file: `${examples}/bundle.cjs.js`,
//       format: 'cjs'
//     },
//     {
//       file: `${examples}/bundle.esm.js`,
//       format: 'esm'
//     },
//     {
//       name: 'spinner',
//       file: `${examples}/bundle.umd.js`,
//       format: 'umd'
//     }
//   ]
// };

export default {
  external: ['d3'],
  //globals: { d3: 'd3' },
  input: 'src/main.js',
  output: {
    file: 'examples/bundle.js',
    format: 'cjs'
  },
  plugins: [eslint]
};
