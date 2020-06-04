'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const app = express();
require('./bootstrap');
require('./db')();
const os = require('os');
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const parser = require('body-parser');
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
const cors = require('./cors');
app.use(cors);
require('./routes')(app);
server.listen(port);
console.log('Express app started in ' + app.get('env') + ' mode on port ' + port);
setInterval(function () {
    var cpus = os.cpus();
    // console.log(os.cpus());
    // console.log(os.totalmem());
    // console.log(os.freemem())
    let perc = ((os.totalmem() - os.freemem())/os.totalmem())*100;
    console.log('CPU perc: ', perc);
    if(perc > 70) {
        process.exit();
    }
    // for(var i = 0, len = cpus.length; i < len; i++) {
    //     // console.log("CPU %s:", i);
    //     var cpu = cpus[i], total = 0;
    
    //     for(var type in cpu.times) {
    //         total += cpu.times[type];
    //     }
    
    //     for(type in cpu.times) {
    //         console.log("\t", type, Math.round(100 * cpu.times[type] / total));
    //     }
    // }
}, 1000);
process.on('SIGINT', function () {
    server.close();
    console.log('server connection closed');
});