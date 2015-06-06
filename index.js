'use strict';
var got = require('got');
var cheerio = require('cheerio');
var vm = require('vm');
var async = require('async');

module.exports = function (callback) {
    var getStatus = function (url) {
        return function (cb) {
            got(url, function (error, data) {
                if (error) {
                    cb(error);
                    return;
                }

                var $ = cheerio.load(data);
                var lastScript = $("script").get(-1).children[0].data;
                lastScript = lastScript.replace(/var/g, '');
                var itcData = { haveTodays : false };
                itcData = vm.runInThisContext(lastScript);

                cb(null, {
                    status: itcData.haveTodays
                });
            });
        };
    };

    async.parallel({
        iTunesConnect: getStatus('appfigures.com/itcstatus'),
        googlePlay: getStatus('appfigures.com/playstatus')
    },  function (err, result) {
        if (err) {
            callback(err);
            return;
        }

        callback(null, result);
    });
};
