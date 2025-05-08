import { defineConfig } from 'eslint/config'
import standardJs from '@seungwoo321/eslint-plugin-standard-js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,vue}'],
    ignores: ['eslint.config.js', "dist/**/*"],
    extends: [
      ...tseslint.configs.recommended,
      ...standardJs.configs.recommended,
      ...pluginVue.configs['flat/strongly-recommended']
    ]
  }
])