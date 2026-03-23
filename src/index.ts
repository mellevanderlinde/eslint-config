import { antfu } from '@antfu/eslint-config'

export function defineConfig(): ReturnType<typeof antfu> {
  return antfu({ typescript: true })
}
