// Generated by CoffeeScript 1.7.1
(function () {
    var serverConfig, app, express, domain, hostsApp, _;

    _ = require('underscore');
    express = require('express');


    //Config All Project
    serverConfig = {
        _apiServerPath: '/home/hubtaxi-backend',
        _port: 6868,
        _sessionSecret: 'Enter Secret',
        _cookieSecret: 'Enter Secret',
        /*_db: 'mongodb://admin:admin@ds027769.mongolab.com:27769/nodejsvn',*/
        /*_db: 'mongodb://nodejs.vn:27678/nodejs',*/
        //_db: 'mongodb://localhost:27017/mydb',
        /*_db: 'mongodb://admin:admin@ds063297.mongolab.com:63297/nodejsforum',*/
        //_db: 'mongodb://root:1234563@ds039507.mongolab.com:39507/mydb',
        _db: 'mongodb://admin:egaflower3@ds161032.mlab.com:61032/bodaboda1',
        _tokenScrete: 'huhuhu'
    };

    // connect database global get info App
    hostsApp =
    {
        'localhost': {
            _apiServerPath: '/',
            _db: "mongodb://admin:admin@ds063297.mongolab.com:63297/nodejsforum2",
            _tokenScrete: "locahostToken",
            _cookieSecret: "localhostCookie",
            _sessionSecret: "localhostSession",
            _active: true
        },
        'domain2.com': {
            _apiServerPath: '/home/hung/WebstormProjects/bell/apiServer',
            _db: "mongodb://admin:admin@ds063297.mongolab.com:63297/domain2",
            _tokenScrete: "token1",
            _cookieSecret: "cookie1",
            _sessionSecret: "session1",
            _active: true
        },
        'vsoft.vn': {
            _apiServerPath: '/home/hung/WebstormProjects/bell/apiServer',
            _db: "mongodb://admin:admin@ds063297.mongolab.com:63297/vsoft",
            _tokenScrete: "token2",
            _cookieSecret: "token2",
            _sessionSecret: "token2",
            _active: true
        },
        'nodejs.vn': {
            _apiServerPath: '/home/hung/WebstormProjects/bell/apiServer',
            _db: "mongodb://admin:admin@ds063297.mongolab.com:63297/nodejs",
            _tokenScrete: "token3",
            _cookieSecret: "cookie3",
            _sessionSecret: "session3",
            _active: true
        }
    };


    app = express();
    express = require('express');

    app.all('*', function ( req, res, next ) {

        /* get Host */
        domain = req.host;

        if (_.has(hostsApp, domain)) {
            serverConfig = hostsApp[domain];
            console.log('[2] Server active config : ', serverConfig);
            next();
        } else {
            console.log("[2] Server not active config");
        }
    });

    exports.serverConfig = serverConfig;

}).call(this);

//# sourceMappingURL=init.map
