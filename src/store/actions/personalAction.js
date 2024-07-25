/**
 * personal板块要派发的行为对象管理
 *    personalAction包含好多方法，每一个方法执行，都返回要派发的行为对象
 */

import * as TYPES from '../action-type'

const personalAction = {
  support() {
    return {
      type: TYPES.PERSONAL_SUP
    }
  },
  info() {
    return {
      type: TYPES.PERSONAL_INFO
    }
  }
}

export default personalAction