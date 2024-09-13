import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Platform } from "react-native";

console.assert(
	process.env.EXPO_PUBLIC_SUPABASE_URL,
	"Missing EXPO_PUBLIC_SUPABASE_URL",
);

const supabaseUrl =
	Platform.OS === "android"
		? process.env.EXPO_PUBLIC_SUPABASE_URL?.replace("localhost", "10.0.2.2")
		: process.env.EXPO_PUBLIC_SUPABASE_URL;

console.assert(
	process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
	"Missing EXPO_PUBLIC_SUPABASE_ANON_KEY",
);

export const supabase = createClient(
	supabaseUrl || "",
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
