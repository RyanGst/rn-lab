import { useAuth } from "../modules/auth/context/use-auth";
import AuthStack from "./auth/AuthStack";
import Dashboard from "./dashboard";

const AppRoutes = () => {
	const { user } = useAuth();
	return !user ? <AuthStack /> : <Dashboard />;
};

export default AppRoutes;
