const request = require('request');

var scrapeProxies = new Promise((resolve, reject) => {
    request({
        method: "GET",
        url: "https://api.proxyscrape.com/?request=displayproxies&proxytype=http&timeout=1000",
    }, (error, response, body) => {
        if (body) {
            return resolve(body.split("\n"));
        } else {
            return reject();
        }
    });
});

module.exports = { scrapeProxies };
