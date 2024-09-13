import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens/auth/login";
import DashboardScreen from "../../screens/dashboard/dashboard";
import { AuthStackRoutes } from "../auth/AuthStackRoutes";

const DashboardStack = createNativeStackNavigator();
const Dashboard = () => {
	return (
		<DashboardStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<DashboardStack.Screen name={"Dashboard"} component={DashboardScreen} />
		</DashboardStack.Navigator>
	);
};

export default Dashboard;
