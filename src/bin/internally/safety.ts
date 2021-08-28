/*
 * @Author: Cookie
 * @Description: 安全相关
 */

import { execEslint } from '@/index'

/**
 * @description: eslint 检测
 * @param {*}
 * @return {*}
 */
export const eslintCommand = {
  version: '0.1.0',
  description: 'start eslint and fix code',
  command: 'eslint',
  action: () => execEslint()
}

export default [
  eslintCommand
]