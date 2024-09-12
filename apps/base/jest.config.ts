import type { Config } from "jest";

const config: Config = {
	verbose: true,
	preset: "jest-expo",
	transformIgnorePatterns: [
		"<rootDir>/node_modules/(?!((jest-)?@?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
	],
	setupFiles: ["dotenv/config", "./setupJest.ts"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": [
			"babel-jest",
			{ configFile: "./babel.config.js" }, // <- cannot use rootDir here
		],
	},
};

require("dotenv").config();

export default config;
