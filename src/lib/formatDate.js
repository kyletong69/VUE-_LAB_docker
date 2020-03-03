/** @summary 日期&時間補到兩位數
* @param {Number} t 需檢查的時間或日期
* @return {String} 時間或日期 e.g. 09
*/
function checkTime (t) {
  if (t < 10) {
    t = `0${t}`
  }
  return t
}

/** @summary 日期樣式轉換
* @param {String} type 轉換的樣式, 年月日 => str, / : - 則會直接使用
* @param {Number} number 判斷 中文 & 符號狀態下日期後方不顯示使用
* @return {String} 日期 e.g. 19年08月12日, 19-08-12
*/
function splitType (type, number) {
  let str = '年月日'
  if (type === 'str') {
    return str.split('')[number]
  } else {
    return (number === 2) ? '' : type
  }
}

/** @summary 週轉換
* @param {String} str 轉換的樣式, e.g. 星期, 週, 周
* @param {Number} number 選擇週期
* @return {String} 週期 e.g. 星期日, 週日, 周日
*/
function splitWeek (str, number) {
  if (!str) return
  let week = '日一二三四五六'
  return `${str}${week.split('')[number]}`
}

/** @summary 轉換的日期或時間
* @param {Number} t 需轉換的日期或時間, false => new Date()
* @param {String} format 日期格式 e.g. ymd, md
* @param {String} type 日期顯示樣式 e.g. 年月日或符號
* @param {String} week 顯示週期樣式, false => 不顯示, 需顯示請填樣式 e.g. 星期, 週
* @param {Number} addDay 增加天數, 未填寫及顯示當天
* @return {String} 日期時間
*/
export function formatData (t, format, type, week, addDay) {
  let year, month, day, hour, minute, second
  let date = new Date()
  // NOTE 自訂日期時間
  if (t) {
    date = new Date(t)
  }
  // NOTE 增加天數
  if (addDay) {
    date.setDate(date.getDate() + addDay)
  }
  // NOTE 取得日期與時間
  year = checkTime(date.getFullYear())
  month = checkTime(date.getMonth() + 1)
  day = checkTime(date.getDate())
  hour = checkTime(date.getHours())
  minute = checkTime(date.getMinutes())
  second = checkTime(date.getSeconds())

  let str
  // NOTE 組合日期或時間
  switch (format.toLowerCase()) {
    case 'ymdhms':
      str = `${year}${splitType(type, 0)}${month}${splitType(type, 1)}${day}${splitType(type, 2)} ${hour}:${minute}:${second}`
      break
    case 'ymdhm':
      str = `${year}${splitType(type, 0)}${month}${splitType(type, 1)}${day}${splitType(type, 2)} ${hour}:${minute}`
      break
    case 'ymd':
      str = `${year}${splitType(type, 0)}${month}${splitType(type, 1)}${day}${splitType(type, 2)}`
      break
    case 'mdhms':
      str = `${month}${splitType(type, 1)}${day}${splitType(type, 2)} ${hour}:${minute}:${second}`
      break
    case 'mdhm':
      str = `${month}${splitType(type, 1)}${day}${splitType(type, 2)} ${hour}:${minute}`
      break
    case 'md':
      str = `${month}${splitType(type, 1)}${day}${splitType(type, 2)}`
      break
    default:
      console.log(`format 格式錯誤 : ${format.toLowerCase()}`)
      break
  }
  return (!week) ? str : `${str} ${splitWeek(week, date.getDay())}`
}
