/**
 * Created by yeliex
 */

(function () {
    module.exports = (function () {
        var os;
        var that = Object.assign({}, require("os"));
        var platform = that.platform();
        if (global && global.nw) {
            platform = "nw";
        }
        switch (platform) {
            case "browser":
            case "nw":
            {
                // 浏览器时,正则判断US
                os = (function () {
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
                os = "osx";
                break;
            }
        }
        that.isWin = (function () {
            return os == "win";
        }());
        that.isOSX = (function () {
            return os == "osx";
        }());
        that.isLinux = (function () {
            return os == "linux";
        }());
        that.isIOS = (function () {
            return os == "ios";
        }());
        that.isAndroid = (function () {
            return os == "android";
        }());
        that.isBrowser = (function () {
            return platform == "browser" || platform == "nw";
        }());
        that.isOnlyBrowser = (function () {
            return platform == "browser";
        }());
        that.isNW = (function () {
            return platform == "nw";
        }());
        that.os = os;
        that.platform = platform;
        return that;
    }());
}());