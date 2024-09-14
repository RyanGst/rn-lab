import { Button } from "@rn-lab/ui";
import React from "react";
import { Text } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { version } from "../../../package.json";
import { useAuth } from "../../modules/auth/context/use-auth";
import { styles } from "./login-styles";

export const Login = () => {
	const { signIn } = useAuth();

	return (
		<Animated.View entering={FadeIn} style={styles.container}>
			<Text style={styles.title}>Version: {version}</Text>
			<Button onClick={signIn} text="Login c/ Github" />
		</Animated.View>
	);
};
