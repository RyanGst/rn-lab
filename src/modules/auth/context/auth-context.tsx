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

	const signIn = () => performOAuth("facebook");

	const signOut = () => {
		setUser(null);
	};

	const value = { user, signIn, signOut };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
