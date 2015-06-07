#!/usr/bin/env node
'use strict';
var meow = require('meow');
var reportStatus = require('./');

var cli = meow({
    help: [
        'Example',
        '  $ report-status',
        '  iTunes Connect : Yes',
        '  Google Play    : No'
    ].join('\n')
});

reportStatus(function (err, statuses) {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }

    console.log('iTunes Connect : ' + (statuses.iTunesConnect.status ? 'Yes' : 'No'));
    console.log('Google Play    : ' + (statuses.googlePlay.status ? 'Yes' : 'No'));
});
