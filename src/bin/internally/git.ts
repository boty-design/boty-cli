/*
 * @Author: Cookie
 * @Description: git 相关
 */

import inquirer from '@/inquirer';

const { initGit } = inquirer

/**
 * @description: git 初始化
 * @param {*}
 * @return {*}
 */
export const initGitCommand = {
  version: '0.1.0',
  description: 'git init',
  command: 'git init',
  action: () => initGit()
}

export default [
  initGitCommand
]