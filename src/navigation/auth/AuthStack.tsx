import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Login } from "../../screens/auth/Login";
import { AuthStackRoutes } from "./AuthStackRoutes";

const AuthStack = createNativeStackNavigator();
const Auth = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen name={AuthStackRoutes.LOGIN} component={Login} />
		</AuthStack.Navigator>
	);
};

export default Auth;
