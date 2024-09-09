import * as QueryParams from "expo-auth-session/build/QueryParams";
import { supabase } from "../../../utils/supabase";

export const createSessionFromUrl = async (url: string) => {
	const { params, errorCode } = QueryParams.getQueryParams(url);

	if (errorCode) throw new Error(errorCode);
	const { access_token, refresh_token } = params;

	if (!access_token) return;

	const { data, error } = await supabase.auth.setSession({
		access_token,
		refresh_token,
	});

	if (error) throw error;

	return data.session;
};
