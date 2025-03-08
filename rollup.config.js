import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
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
    css({
      output: 'dist/plinth.css'
    }),
  ],
  external: ['react', 'react-dom'],
};

