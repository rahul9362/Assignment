'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = () => {

    let options = {
        keepAliveInitialDelay: 300000,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMS: 45000
    };

    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.DB, options, (err) => {
        if (err) console.log('MongoDB connect Error:', err);
    });
    //first conn
    mongoose.connection.on('connected', function () {
        console.log('[1]Mongoose connection open to ' + process.env.DB.split('/').pop());
    });

    mongoose.connection.once('open', () => {
        console.log('[1]Connected to mongodb!');
    });

    mongoose.connection.on('error', function (err) {
        console.error('[1]Mongoose default error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('[1]Mongoose default connection disconnected');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('[1]Mongoose default connection disconnected through app termination');
        });
    });
};