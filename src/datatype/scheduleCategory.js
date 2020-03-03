/** @summary 賽程資料格式，底下為範例
* @param {string} header 聯賽名稱包含第幾輪
* @param {Array} match 賽程場次，單一聯賽有多場次
* @param {string} date 賽程日期
* @param {string} Chome 主場中文隊名
* @param {string} Ehome 主場英文隊名, 用於抓取球隊 icon 使用
* @param {string} Caway 客場中文隊名
* @param {string} Eaway 客場英文隊名, 用於抓取球隊 icon 使用
* @param {string} time 賽程時間
* @param {string} type 聯賽名稱
* @param {string} status 比賽狀態
* @param {string} result 比賽結果
* @param {Boolean} live 是否有直播
*/

const scheduleCategory = [
  { header: '中超第17轮', // e.g. ( 中超第17輪, 友誼賽 )
    match: [
      { date: '2018/7/18 週四',
        Chome: '松本山雅FC',
        Ehome: 'MYFC',
        Caway: '磐田喜悦',
        Eaway: 'JI',
        time: '14:55', // e.g. ( 14:55, 23:00 )
        type: '中超', // e.g. ( 中超, 英超 )
        status: '進行中', // e.g. ( 14:55開球, 14:55完場, 進行中)
        result: 'VS', // e.g. ( VS, 1 - 5 )
        live: true }
    ]
  }
]

export default scheduleCategory
