import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

console.assert(
	process.env.EXPO_PUBLIC_SUPABASE_URL,
	"Missing EXPO_PUBLIC_SUPABASE_URL",
);

console.assert(
	process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
	"Missing EXPO_PUBLIC_SUPABASE_ANON_KEY",
);

export const supabase = createClient(
	process.env.EXPO_PUBLIC_SUPABASE_URL || "",
	process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
	{
		auth: {
			storage: AsyncStorage,
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: false,
		},
	},
);
