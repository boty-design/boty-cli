/*
 * @Author: Cookie
 * @Description: 模板相关
 */

import inquirer from '@/inquirer';

const { addTpl, selectTpl } = inquirer

/**
 * @description: 添加模板
 * @param {*}
 * @return {*}
 */
export const addTplCommand = {
  version: '0.1.0',
  description: 'add tpl',
  command: 'add tpl',
  action: () => addTpl()
}


/**
* @description: 初始化模板
* @param {*}
* @return {*}
*/
export const selectTplCommand = {
  version: '0.1.0',
  description: 'init tpl',
  command: 'init tpl',
  action: () => selectTpl()
}

export default [
  addTplCommand,
  selectTplCommand
]