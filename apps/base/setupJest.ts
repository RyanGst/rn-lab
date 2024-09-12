require("dotenv").config();

jest.mock("@react-native-async-storage/async-storage", () =>
	require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

jest.mock("expo-web-browser", () => ({
	openAuthSessionAsync: jest.fn(),
	maybeCompleteAuthSession: jest.fn(),
}));

jest.mock("expo-linking", () => {
	const module: typeof import("expo-linking") = {
		...jest.requireActual("expo-linking"),
		createURL: jest.fn(),
	};

	return module;
});
