/**
 * 工具函数
 */

/**
 * 格式化内容换行
 * @param value
 * @returns {string}
 */
export function lineFeed(value) {
  if (!value) return '';
  return (value + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
}

/**
 *  防抖函数
 * @param {*} func
 * @param {*} delay
 * @returns
 */
export function debounce(func, delay) {
  let timer; // 定义计时器变量
  return function () {
    clearTimeout(timer); // 清除上一次的计时器

    const context = this; // 保存this指向
    const args = arguments; // 保存参数列表
    timer = setTimeout(() => {
      func.apply(context, args); // 使用setTimeout延迟执行传入的函数
    }, delay);
  };
}

/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams(params) {
  let result = '';
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = encodeURIComponent(propName) + '=';
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (
            value[key] !== null &&
            value[key] !== '' &&
            typeof value[key] !== 'undefined'
          ) {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + '=';
            result += subPart + encodeURIComponent(value[key]) + '&';
          }
        }
      } else {
        result += part + encodeURIComponent(value) + '&';
      }
    }
  }
  return result;
}

// 验证是否为blob格式
export function blobValidate(data) {
  return data.type !== 'application/json';
}
