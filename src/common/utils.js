// 防抖动函数
export function debounce (func,delay) {
    let timer = null;
    return (...args) => {
        // 取消上一次请求
        if (timer) clearInterval(timer);
        // 开启定时器
        timer = setTimeout(() => {
            func.apply(this,args);
           
        },delay)
    }
}

// 时间转化格式所需
function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  
  // 时间格式化
  export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
  
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
  
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
  
    return fmt;
  }
  