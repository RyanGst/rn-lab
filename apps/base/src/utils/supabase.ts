import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSupabase, initializeSupabase } from "@rn-lab/supabase";
import { Platform } from "react-native";
import "react-native-url-polyfill/auto";

console.assert(
	process.env.EXPO_PUBLIC_SUPABASE_URL,
	"Missing EXPO_PUBLIC_SUPABASE_URL",
);

console.assert(
	process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
	"Missing EXPO_PUBLIC_SUPABASE_ANON_KEY",
);

const supabaseUrl =
	Platform.OS === "android"
		? process.env.EXPO_PUBLIC_SUPABASE_URL?.replace("localhost", "10.0.2.2")
		: process.env.EXPO_PUBLIC_SUPABASE_URL;

initializeSupabase({
	supabaseUrl: supabaseUrl || "",
	supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});

export const supabase = getSupabase();
