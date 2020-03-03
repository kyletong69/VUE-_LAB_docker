/** @summary  取得日期
* @param {string} t 需轉換的時間
* @return {str} 月日 e.g. 11月11日
*/
function getTime (t) {
  let date = new Date(parseInt(t))
  // let Y = date.getFullYear()
  let M = (date.getMonth() + 1 < 10 ? `0${(date.getMonth() + 1)}` : date.getMonth() + 1)
  let D = date.getDate()
  let str = `${M}月${D}日`
  return str
}

/** @summary  將 messageList group by day 插入時間線
* @param {array} data 需要加時間線的資料
* @return {array}} return css 至 template html標籤中 style 或 其他 function 再進行加工
*/
export function setTimeBar (data) {
  console.log(data)
  if (data.length === 0) return
  let series = []
  // NOTE 先推最初的日期
  series.push({
    chatTarget: '',
    chatMessage: {
      historyUuid: '',
      from: { userUuid: '' },
      stamp: data[0].chatMessage.stamp,
      time: getTime(data[0].chatMessage.stamp),
      message: '',
      style: 'date'
    }
  })
  for (let i = 0; i < data.length; i++) {
    // NOTE 除最後一筆外 而且 前後兩筆時間不相同 => 先推 當前資料，再推 下一筆的時間當時間線
    if ((i !== data.length - 1) && (getTime(data[i].chatMessage.stamp) !== getTime(data[i + 1].chatMessage.stamp))) {
      series.push(data[i], {
        chatTarget: '',
        chatMessage: {
          historyUuid: '',
          from: { userUuid: '' },
          stamp: data[i + 1].chatMessage.stamp,
          time: getTime(parseFloat(data[i + 1].chatMessage.stamp)),
          message: '',
          style: 'date'
        }
      })
      // NOTE 最後一筆 與 前後兩筆時間相同 => 直接推當前資料
    } else {
      series.push(data[i])
    }
  }
  return series
}
