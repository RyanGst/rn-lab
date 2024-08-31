import * as WebBrowser from "expo-web-browser";
import { supabase } from "../../../utils/supabase";
import { createSessionFromUrl } from "./create-session-from-url";

import type { Provider } from "@supabase/supabase-js";
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession(); // required for web only
const redirectTo = makeRedirectUri();

export const performOAuth = async (provider: Provider) => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider,
		options: {
			redirectTo,
			skipBrowserRedirect: true,
		},
	});
	if (error) throw error;

	const res = await WebBrowser.openAuthSessionAsync(
		data?.url ?? "",
		redirectTo,
	);

	if (res.type === "success") {
		const { url } = res;
		return await createSessionFromUrl(url);
	}

	console.log(res);
};
