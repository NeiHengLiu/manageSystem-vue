import fetch from '../config/fetch'

/**
 * 测试接口
 */

export const test = (data, type) => fetch('/admin/test', data, type);