#!/usr/bin/env node

const shell = require('shelljs');
const localtunnel = require("localtunnel");
const express = require('express')
const bodyParser = require('body-parser');
const argv = require('minimist')(process.argv.slice(2));

if(argv.d == undefined || argv.r == undefined || argv.u == undefined){
   console.log("ERROR: Not enough Args");
   process.kill(process.pid, 'SIGTERM');
}


const app = express();

let dir = argv.d;
let user = argv.u;
let repo = argv.r;
let cloneUrl = "https://github.com/" + user + "/" + repo + ".git";

app.use(bodyParser.json());

app.post('/', function (req, res) {
    //console.log(JSON.stringify(req.headers));
    //console.log(req.body);
    
    shell.exec("rm -rf " + dir + "{*,.*}");
    shell.exec("git clone " + cloneUrl + " " + dir);

    res.send('OK');
});

app.listen(8080, function () {
   console.log("listing Port:" , 8080);
});

(async () => {
   const tunnel = await localtunnel({ port: 8080 });
 
   console.log("Webhook URL:", tunnel.url);
 
   tunnel.on('close', () => {
     console.log("tunnel is closed");
   }); 
})();
