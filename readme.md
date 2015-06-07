# report-status [![Build Status](https://travis-ci.org/luugiathuy/report-status.svg?branch=master)](https://travis-ci.org/luugiathuy/report-status)

> Check whether iTunesConnect and Google Play have released today's app reports yet - provided by [appfigures.com](https://appfigures.com)

## CLI

```
$ npm install --global report-status
```

```
$ report-status --help

  Example
    $ report-status
    iTunes Connect : Yes
    Google Play    : No
```

## API

```
$ npm install --save report-status
```

```js
var reportStatus = require('report-status');

reportStatus(function (err, statuses) {
    console.log(statuses);
    //=> { googlePlay: { status: true },
    //     iTunesConnect: { status: true } }
});
```

## License

MIT © [Luu Gia Thuy](http://luugiathuy.com)
