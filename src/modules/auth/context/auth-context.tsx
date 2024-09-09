import type { User } from "@supabase/supabase-js";
import { type ReactNode, createContext, useState } from "react";
import { performOAuth } from "../oauth/perform-oauth";

type AuthContextType = {
	user: User | null;
	signIn: () => void;
	signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

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
	const signOut = () => {
		setUser(null);
	};

	const value = { user, signIn, signOut };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
