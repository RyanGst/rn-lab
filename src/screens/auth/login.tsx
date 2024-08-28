import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login-styles";

export const Login = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TouchableOpacity style={styles.loginButton}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.socialButton}>
				<Text style={styles.buttonText}>Login with Social</Text>
			</TouchableOpacity>
		</View>
	);
};
