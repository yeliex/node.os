/**
 * Created by yeliex
 */

(function () {
  const init = (function () {
    let OS = '';
    const that = Object.assign({}, require("os"));
    let platform = that.platform();
    let isWechat = (typeof navigator === 'object' && navigator.userAgent && navigator.userAgent.match(/MicroMessenger/g));
    let isElectron = (typeof navigator === 'object' && navigator.userAgent && navigator.userAgent.match(/Electron/g));

    if (global && global.nw) {
      platform = "nw";
    }

    switch (platform) {
      case "browser":
      case "nw":
      {
        // 浏览器时,正则判断US
        OS = (function () {
          var release = require("os").release();
          if (release.match(/iPad|iPhone/g)) {
            return "ios";
          }
          if (release.match(/Macintosh|Mac OS X/g)) {
            return "osx";
          }
          if (release.match(/Windows/g)) {
            return "win";
          }
          if (release.match(/Android/g)) {
            return "android";
          }
          if (release.match(/Linux/g)) {
            return "linux";
          }
          return "other";
        }());
        break;
      }
      case "darwin":
      {
        OS = "osx";
        break;
      }
    }
    that.isWin = (function () {
      return OS === "win";
    }());
    that.isOSX = (function () {
      return OS === "osx";
    }());
    that.isLinux = (function () {
      return OS === "linux";
    }());
    that.isIOS = (function () {
      return OS === "ios";
    }());
    that.isAndroid = (function () {
      return OS === "android";
    }());
    that.isBrowser = (function () {
      return platform === "browser" || platform === "nw" || isElectron || isWechat;
    }());
    that.isOnlyBrowser = (function () {
      return platform === "browser" && !isWechat;
    }());
    that.isNW = (function () {
      return platform === "nw";
    }());
    that.isElectron = isElectron;
    that.isWechat = isWechat;
    that.os = OS;
    that.platform = isWechat ? 'wechat' : isElectron ? 'Electron' : platform;
    return that;
  }());

  if (typeof module === 'object') {
    module.exports = init;
  }
  if (typeof navigator === 'object') {
    navigator.os = init;
  }
}());