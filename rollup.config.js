import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'plinth.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      inject: true,  // Injects CSS into JS automatically
      extract: false // Prevents separate CSS file, inlines it
    }),
  ],
  external: ['react', 'react-dom'],
};
