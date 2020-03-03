export function setCookie (cname, value, expireMinutes) {
  var exdate = new Date()
  exdate.setMinutes(exdate.getMinutes() + expireMinutes)
  document.cookie = cname + '=' + value + ((expireMinutes == null) ? '' : ';Expires=' + exdate.toUTCString() + ';path=/')
  // document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';Max-Age=' + expiredays * 60+ ';path=/');
}

export function getCookie (name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return (arr[2])
  } else {
    return null
  }
}
