import { render } from "@testing-library/react-native";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import { createSessionFromUrl } from "../modules/auth/oauth/create-session-from-url";
import { performOAuth } from "../modules/auth/oauth/perform-oauth";
import { supabase } from "../utils/supabase";

jest.mock("../utils/supabase", () => ({
	supabase: {
		auth: {
			signInWithOAuth: jest.fn(),
		},
	},
}));

jest.mock("expo-web-browser", () => ({
	openAuthSessionAsync: jest.fn(),
	maybeCompleteAuthSession: jest.fn(),
}));

jest.mock("../modules/auth/oauth/create-session-from-url", () => ({
	createSessionFromUrl: jest.fn(),
}));

describe("<HomeScreen />", () => {
	it("should successfully perform OAuth", async () => {
		const mockUser = { id: "123", email: "test@example.com" };
		const mockSession = { user: mockUser, access_token: "token" };

		(supabase.auth.signInWithOAuth as jest.Mock).mockResolvedValue({
			data: { url: "https://example.com/auth" },
			error: null,
		});

		(WebBrowser.openAuthSessionAsync as jest.Mock).mockResolvedValue({
			type: "success",
			url: "https://example.com/callback",
		});

		(createSessionFromUrl as jest.Mock).mockResolvedValue(mockSession);

		const result = await performOAuth("facebook");

		expect(result).toEqual(mockSession);
		expect(supabase.auth.signInWithOAuth).toHaveBeenCalledWith({
			provider: "facebook",
			options: expect.any(Object),
		});
		expect(WebBrowser.openAuthSessionAsync).toHaveBeenCalled();
		expect(createSessionFromUrl).toHaveBeenCalledWith(
			"https://example.com/callback",
		);
	});
});
