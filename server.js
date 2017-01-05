"use strict";
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const path = require('path');

    let server;

    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, '/views'));
    app.use(express.static('public'));
    app.use('/images', express.static(__dirname + '/images'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use('/', (ignore, res) => {res.status(200).render("index.pug")});

    app.use(function (ignore, res) {
        res.status(404).render("404/index.pug");
    });

    server = app.listen(process.env.app_port || 3000, function () {
        const host = server.address().address;
        const port = server.address().port;

        console.log('Listening at http://%s:%s', host, port);
    });