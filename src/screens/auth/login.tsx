import * as Linking from "expo-linking";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { version } from "../../../package.json";
import { useAuth } from "../../modules/auth/context/use-auth";
import { createSessionFromUrl } from "../../modules/auth/oauth/create-session-from-url";
import { performOAuth } from "../../modules/auth/oauth/perform-oauth";
import { styles } from "./login-styles";

export const Login = () => {
	const { signIn } = useAuth();

	return (
		<Animated.View entering={FadeIn} style={styles.container}>
			<Text style={styles.title}>Version: {version}</Text>
			<TouchableOpacity onPress={signIn} style={styles.loginButton}>
				<Text>Login c/ Facebook</Text>
			</TouchableOpacity>
		</Animated.View>
	);
};
