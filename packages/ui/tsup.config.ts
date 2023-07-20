import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  entry: ['src/components/**/*.{ts,tsx}', 'src/lib/**/*.{ts,tsx}'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
  keepNames: true,
  ...options
}))
