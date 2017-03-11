
/*
微信判断
 */
this.IsWeiXin = function() {
    var _isWeixin = false;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") _isWeixin = true;
    return _isWeixin;
};
/*
IOS/安卓设备判断
 */
this.IsIOS = function() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS;
};
