import * as WebBrowser from "expo-web-browser";
import { supabase } from "../../../utils/supabase";
import { createSessionFromUrl } from "./create-session-from-url";

import type { Provider } from "@supabase/supabase-js";
import { makeRedirectUri } from "expo-auth-session";
import Constants from "expo-constants";

WebBrowser.maybeCompleteAuthSession(); // required for web only

const redirectTo = makeRedirectUri({
	scheme: Constants.expoConfig?.scheme || "click.ryangst.rn-lab",
	path: "auth/callback",
});

export const performOAuth = async (provider: Provider) => {
	console.log(redirectTo);
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider,
		options: {
			redirectTo,
			skipBrowserRedirect: true,
		},
	});
	if (error) throw error;
	if (!data?.url) throw new Error("No URL returned from signInWithOAuth");

	const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

	if (result.type === "success") {
		const { url } = result;
		return await createSessionFromUrl(url);
	}

	console.log("Failed to authenticate", result);
};
