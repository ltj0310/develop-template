/**
 * 日期格式化
 */
export const dateFormat = (date) => {
  let format = 'yyyy-MM-dd hh:mm:ss';
  if (date != 'Invalid Date') {
    var o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] :
            ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }
  return '';
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}
/**
 * 对象深复制
 */
export const _deepClone = (source) => {
  if (typeof source === 'object') {
    let target = Array.isArray(source) ? [] : {}
    for (let key in source) {
      if (typeof source[key] === 'object') {
        target[key] = _deepClone(source[key])
      } else {
        target[key] = source[key]
      }
    }
    return target
  } else {
    return source
  }
}
/**
 * 格式化金钱
 */
export const format = (str) => {
  return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}