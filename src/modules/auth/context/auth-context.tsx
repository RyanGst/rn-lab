import type { User } from "@supabase/supabase-js";
import { type ReactNode, createContext, useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import { performOAuth } from "../oauth/perform-oauth";

type AuthContextType = {
	user: User | null;
	signIn: () => void;
	signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkUser();
	}, []);

	const checkUser = async () => {
		try {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			setUser(session?.user ?? null);
		} catch (error) {
			console.error("Error checking user session:", error);
		} finally {
			setLoading(false);
		}
	};
	const signIn = async () => {
		try {
			const session = await performOAuth("facebook");
			if (session?.user) {
				setUser(session.user);
			} else {
				throw new Error("No user data in session");
			}
		} catch (error) {
			console.error("Error signing in:", error);
			// Here you can set an error state or show an error message to the user
		}
	};
	const signOut = async () => {
		try {
			await supabase.auth.signOut();
			setUser(null);
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	const value = { user, signIn, signOut };

	if (loading) {
		// You might want to render a loading indicator here
		return null;
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
