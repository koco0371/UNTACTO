//ecosystem.config.js
module.exports = {
	apps: [{
		name: 'untacto',
		script: './servers/server.js',
		intnces: 0,
		exec_mode: 'cluster'
	}]
}

