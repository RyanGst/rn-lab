import { useEffect } from "react";
import { useAuth } from "../modules/auth/context/use-auth";
import AuthStack from "./auth/AuthStack";
import Dashboard from "./dashboard";

const AppRoutes = () => {
	const { user } = useAuth();

	useEffect(() => {
		console.log("user", user);
	}, [user]);

	return !user ? <AuthStack /> : <Dashboard />;
};

export default AppRoutes;
