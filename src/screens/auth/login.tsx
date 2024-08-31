import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { version } from "../../../package.json";
import { performOAuth } from "../../modules/auth/oauth/perform-oauth";
import { styles } from "./login-styles";

export const Login = () => {
	return (
		<Animated.View entering={FadeIn} style={styles.container}>
			<Text style={styles.title}>Version: {version}</Text>
			<TouchableOpacity
				onPress={() => performOAuth("facebook")}
				style={styles.loginButton}
			>
				<Text>Login c/ Facebook</Text>
			</TouchableOpacity>
		</Animated.View>
	);
};
