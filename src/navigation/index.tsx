import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { useAuth } from "../modules/auth/context/use-auth";
import AuthStack from "./auth/AuthStack";

const AppRoutes = () => {
	const { user } = useAuth();

	return user ? (
		<View>
			<Text>Logadasso</Text>
		</View>
	) : (
		<AuthStack />
	);
};

export default AppRoutes;
