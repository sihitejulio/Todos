const express = require('express');
const iniParser = require('./libs/iniParser');
const args = require('minimist')(process.argv.slice(2));
const bodyParser = require('body-parser');
const app = express();
process.env.TZ = 'Asia/Jakarta';

let config = {
    app: {
        host: '0.0.0.0',
        port: 3000
    }
};

if (args.h || args.help) {
    // TODO: print USAGE
    console.log("Usage: node " + __filename + " --config");
    process.exit(-1);
}

configFile = args.c || args.config || './config/config.ini';
config = iniParser.init(config, configFile, args);
console.log(config)

const port = config.app.port || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./router');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(routes);
app.listen(port);