import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./auth/AuthStack";

const AppRoutes = () => {
	return (
		<NavigationContainer>
			<AuthStack />
		</NavigationContainer>
	);
};

export default AppRoutes;
