// api状态

export function pickStatus(status) {
  if (!status && status !== 0) return ''
  return {
    '0': '开发中',
    '2': '审核中',
    '1': '已发布',
    '4': '已下线',
    '3': '回收站'

  }[status]
}

// 计费方式
export function billingType(status) {
  if (!status && status !== 0) return ''
  return {
    '1': '单条计费',
    '2': '阶梯计费',
    '4': '整包计费',
    '3': '其他',
    '5': '免费'
  }[status]
}
// 变更类型
export function pickModifyType(modifyType) {
  if (!modifyType && modifyType !== 0) return ''
  return {
    '0': '发布',
    '1': '授权',
    '2': '下线'
  }[modifyType]
}

// 策略状态
export function pickRuleStatus(status) {
  if (!status && status !== 0) return ''
  return {
    '1': '已生效',
    '2': '未生效',
  }[status]
}

//搜索词高亮
export function highLightTableMsg(msg, highLightStr) {
  if (msg == null) {
    msg = ''
  }
  if (highLightStr == null) {
    highLightStr = ''
  }
  if (msg instanceof Object) {
    msg = JSON.stringify(msg)
  }
  if (highLightStr instanceof Object) {
    highLightStr = JSON.stringify(highLightStr)
  }
  if (!(msg instanceof String)) {
    msg = msg.toString()
  }
  if (!(highLightStr instanceof String)) {
    highLightStr = highLightStr.toString()
  }
  var htmlStr = ''
  if (highLightStr.length > 0) {
    if (msg.indexOf(highLightStr) !== -1) {
      assemblyStr(msg, highLightStr)
    } else {
      htmlStr = '<span>' + msg + '</span>'
    }
  } else {
    htmlStr = '<span>' + msg + '</span>'
  }
  function assemblyStr(msgAssembly, highLightAssembly) {
    if (msgAssembly.indexOf(highLightAssembly) !== -1) {
      var length = highLightAssembly.length
      var start = msgAssembly.indexOf(highLightAssembly)
      htmlStr = htmlStr + '<span>' + msgAssembly.substring(0, start) + '</span>' + '<span class="log-hight-light">' + highLightAssembly + '</span>'
      msgAssembly = msgAssembly.substring(start + length, msgAssembly.length)
      assemblyStr(msgAssembly, highLightAssembly)
    } else {
      htmlStr = htmlStr + '<span>' + msgAssembly + '</span>'
    }
  }
  return htmlStr
}
