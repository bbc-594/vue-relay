import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue';
import {name} from './package.json';
const file = (type) => `dist/${name}.${type}.js`;
const tsConfigOverride = {
  compilerOptions: {
    target: 'ES6',
    lib: ['ES2020', 'dom'],
    rootDir: 'src/index.ts',
    declarationDir: "dist/types",
    declaration: true},
    include: ['src/**/*']
}
const globals = {
  vue: 'Vue',
}

export default {
    input: 'src/index.ts',
    output: [{
      name,
      file: file('esm'),
      format: 'esm',
     }, {
       name,
       file: file('umd'),
       format: 'umd',
       globals
    }],
    plugins: [
      typescript({tsConfigOverride, useTsconfigDeclarationDir: true}),
      css({output: 'relay.css'}),
      vuePlugin()
    ],
    external: ['vue']
  }