import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import React from "react";
import { AuthProvider } from "./modules/auth/context/auth-context";
import { createSessionFromUrl } from "./modules/auth/oauth/create-session-from-url";
import AppRoutes from "./navigation";

export default function App() {
	const url = Linking.useURL();
	if (url) createSessionFromUrl(url);

	return (
		<NavigationContainer>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</NavigationContainer>
	);
}
