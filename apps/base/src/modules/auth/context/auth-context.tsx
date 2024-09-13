import type { User } from "@supabase/supabase-js";
import { type ReactNode, createContext, useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import { checkUser } from "../oauth/check-user";
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
		verifyUserSession();
	}, []);

	const verifyUserSession = async () => {
		const result = await checkUser();

		if (result.ok) {
			setUser(result.value);
		} else {
			console.error("Error verifying user session:", result.error);
		}

		setLoading(false);
	};

	const signIn = async () => {
		try {
			const session = await performOAuth("github");
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
