module.exports = (api) => {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			// should be the last plugin
			"react-native-reanimated/plugin",
		],
	};
};
