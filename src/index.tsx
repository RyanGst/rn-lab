import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthProvider } from "./modules/auth/context/auth-context";
import AppRoutes from "./navigation";

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</NavigationContainer>
	);
}
