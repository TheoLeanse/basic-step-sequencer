export default {
	preact: true,
	webpack: config => {
		if (!config.resolve.alias) {
			config.resolve.alias = {};
		}
		config.resolve.alias.mobx = `${__dirname}/node_modules/mobx/lib/mobx.es6.js`;
		return config;
	}
};
