import "react-native-url-polyfill/auto";
import {
	type SupabaseClient,
	type SupabaseClientOptions,
	createClient,
} from "@supabase/supabase-js";

type SupabaseConfig = {
	supabaseUrl: string;
	supabaseAnonKey: string;
} & SupabaseClientOptions<"public">;

let supabaseInstance: SupabaseClient | null = null;

export const initializeSupabase = (config: SupabaseConfig): SupabaseClient => {
	supabaseInstance = createClient(config.supabaseUrl, config.supabaseAnonKey, {
		auth: {
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: false,
		},
		...config,
	});

	return supabaseInstance;
};

export const getSupabase = (): SupabaseClient => {
	if (!supabaseInstance) {
		throw new Error(
			"Supabase has not been initialized. Call initializeSupabase first.",
		);
	}
	return supabaseInstance;
};
