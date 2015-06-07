'use strict';
var test = require('ava');
var reportStatus = require('./');

test(function (t) {
    t.plan(5);

    reportStatus(function (err, statuses) {
        t.assert(!err, err);
        t.assert(typeof statuses.iTunesConnect === 'object');
        t.assert(typeof statuses.googlePlay === 'object');
        t.assert(typeof statuses.iTunesConnect.status === 'boolean');
        t.assert(typeof statuses.googlePlay.status === 'boolean');
    });
});
