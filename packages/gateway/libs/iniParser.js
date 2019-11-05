'use strict'

const fs = require('fs');
const ini = require('ini');

class Configs {
	init(defaultConfig = null, configDir = null) {
		this.config = {};
		let defaultDir = configDir || '../config/config.ini'
		this.config = ini.parse(fs.readFileSync(defaultDir, 'utf-8'));
		this.copyInto(defaultConfig, this.config);
		this.config = defaultConfig;
		return defaultConfig || {};
	}

	copyInto(oldConfig,newConfig) {
		for (let key in newConfig) {
			if ( ! newConfig.hasOwnProperty(key)) continue
		    if ('object' === typeof(newConfig[key])) {
			    oldConfig[key] = oldConfig[key] || {};
			    copyInto(oldConfig[key], newConfig[key]);
			    continue;
		    }
		    oldConfig[key] = newConfig[key];
		}
	}

	get() {
		return this.config;
	}
}


function copyInto(oldConfig,newConfig) {
	for (let key in newConfig) {
		if ( ! newConfig.hasOwnProperty(key)) continue
	    if ('object' === typeof(newConfig[key])) {
		    oldConfig[key] = oldConfig[key] || {};
		    copyInto(oldConfig[key], newConfig[key]);
		    continue;
	    }
	    oldConfig[key] = newConfig[key];
	}
}

module.exports = new Configs();
