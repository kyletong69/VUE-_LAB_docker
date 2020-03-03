/** @summary 驗證 欄位 是否為空
* @param {String} val 需驗證的值
* @return {Boolean}
*/
export function checkEmpty (val) {
  if (!val && val !== 0 && val !== false) {
    return false
  }
  return true
}

/** @summary 驗證 password 格式，至少六位數的英數字
* @param {String} val 需驗證的值
* @return {Boolean}
*/
export function checkCount (val) {
  if (!/^[A-Za-z0-9]{6,}$/.test(val)) {
    return false
  }
  return true
}

/** @summary 驗證 E-mail 格式
* @param {String} val 需驗證的值
* @return {Boolean}
*/
export function checkEmail (val) {
  if (!/[\w\-\u002e]+\u0040[\w\-\u002e]+\u002e[\w\-\u002e]+/.test(val)) {
    return false
  }
  return true
}
/** @summary 驗證 mobile 格式，9~20位數字
* @param {String} val 需驗證的值
* @return {Boolean}
*/
export function checkMobile (val) {
  if (!/^\d{9,20}$/.test(val)) {
    return false
  }
  return true
}
