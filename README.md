# node.os

[![npm](https://img.shields.io/npm/v/node.os.svg?style=flat-square)](https://www.npmjs.com/package/node.os)

OS detect for both nodejs and browser 

## Installation
```
$ npm install node.os
```

## Use with node

```js
const os = require("node.os"); // return os object

console.log(os.os); // win,osx,linx,etc
console.log(os.platform); // the same as require("os").platform()
````

## Use with Browser

```js
const os = require("node.os"); // return os object

console.log(os.os); // win,osx,linux,ios,android,etc
console.log(os.platform); // browser/nw(node webkit)
````

## Other Params:
```js
- isWin
- isOSX
- isLinux
- isIOS
- isAndroid
- isBrowser // return 'true' when platform is 'browser' or 'nw'
- isOnlyBrowser // return 'true' only when platform is 'browser'
- isNW
````
